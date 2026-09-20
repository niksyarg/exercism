export class RestAPI {
  constructor(database = { users: [] }) {
    // Инициализируем базу данных переданными пользователями
    this.database = database;
  }

  // Метод для обработки GET-запросов
  get(url) {
    const urlObj = new URL(url, 'http://localhost');
    
    // Если эндпоинт /users
    if (urlObj.pathname === '/users') {
      const usersQuery = urlObj.searchParams.getAll('users');
      
      // Если параметры не переданы, возвращаем всех пользователей
      if (usersQuery.length === 0) {
        return { users: this.database.users };
      }
      
      // Фильтруем пользователей по списку имён из запроса
      const filteredUsers = this.database.users.filter(user => 
        usersQuery.includes(user.name)
      );
      
      return { users: filteredUsers };
    }
    
    throw new Error('Not Found');
  }

  // Метод для обработки POST-запросов
  post(url, payload) {
    // 1. Добавление нового пользователя
    if (url === '/add') {
      const { user: name } = payload;
      
      const newUser = {
        name,
        owes: {},
        owed_by: {},
        balance: 0
      };
      
      this.database.users.push(newUser);
      // Сортируем пользователей по алфавиту, как требует Exercism
      this.database.users.sort((a, b) => a.name.localeCompare(b.name));
      
      return newUser;
    }

    // 2. Создание долговой расписки (IOU)
    if (url === '/iou') {
      const { lender, borrower, amount } = payload;
      
      const lenderUser = this.database.users.find(u => u.name === lender);
      const borrowerUser = this.database.users.find(u => u.name === borrower);
      
      if (!lenderUser || !borrowerUser) {
        throw new Error('User not found');
      }

      // Обновляем долг borrower перед lender
      this.updateDebts(lenderUser, borrowerUser, amount);

      // Пересчитываем балансы
      lenderUser.balance = this.calculateBalance(lenderUser);
      borrowerUser.balance = this.calculateBalance(borrowerUser);

      // Возвращаем обновленную информацию о вовлеченных пользователях
      // Ответ должен быть отсортирован по алфавиту имен пользователей
      const responseUsers = [lenderUser, borrowerUser].sort((a, b) => 
        a.name.localeCompare(b.name)
      );

      return { users: responseUsers };
    }

    throw new Error('Not Found');
  }

  // Вспомогательный метод для обновления цепочки долгов
  updateDebts(lender, borrower, amount) {
    // Если lender уже был должен borrower, сначала уменьшаем этот долг
    if (lender.owes[borrower.name]) {
      const existingDebt = lender.owes[borrower.name];
      if (existingDebt > amount) {
        lender.owes[borrower.name] -= amount;
        borrower.owed_by[lender.name] -= amount;
      } else if (existingDebt === amount) {
        delete lender.owes[borrower.name];
        delete borrower.owed_by[lender.name];
      } else {
        const remaining = amount - existingDebt;
        delete lender.owes[borrower.name];
        delete borrower.owed_by[lender.name];
        
        this.addDebt(lender, borrower, remaining);
      }
    } else {
      this.addDebt(lender, borrower, amount);
    }
  }

  // Вспомогательный метод для прямой записи долга
  addDebt(lender, borrower, amount) {
    // borrower теперь должен lender
    borrower.owes[lender.name] = (borrower.owes[lender.name] || 0) + amount;
    lender.owed_by[borrower.name] = (lender.owed_by[borrower.name] || 0) + amount;
    
    // Сортируем ключи объектов по алфавиту для соответствия спецификации
    borrower.owes = this.sortObjectKeys(borrower.owes);
    lender.owed_by = this.sortObjectKeys(lender.owed_by);
  }

  // Подсчет баланса пользователя
  calculateBalance(user) {
    const totalOwedByOthers = Object.values(user.owed_by).reduce((sum, val) => sum + val, 0);
    const totalOwesToOthers = Object.values(user.owes).reduce((sum, val) => sum + val, 0);
    return totalOwedByOthers - totalOwesToOthers;
  }

  // Сортировка ключей объекта по алфавиту
  sortObjectKeys(obj) {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {});
  }
}
