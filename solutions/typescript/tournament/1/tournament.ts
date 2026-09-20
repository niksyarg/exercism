interface TeamStats {
  name: string;
  mp: number; // Matches Played
  w: number;  // Won
  d: number;  // Drawn
  l: number;  // Lost
  p: number;  // Points
}

export class Tournament {
  public tally(input: string): string {
    const teamsData: Record<string, TeamStats> = {};

    // Функция для создания новой команды в базе данных, если её ещё нет
    const getOrCreateTeam = (name: string): TeamStats => {
      if (!teamsData[name]) {
        teamsData[name] = { name, mp: 0, w: 0, d: 0, l: 0, p: 0 };
      }
      return teamsData[name];
    };

    // Читаем входную строку построчно
    const lines = input.split('\n');

    for (const line of lines) {
      // Игнорируем пустые строки
      if (line.trim() === '') continue;

      const [team1Name, team2Name, outcome] = line.split(';');
      
      const team1 = getOrCreateTeam(team1Name);
      const team2 = getOrCreateTeam(team2Name);

      // Увеличиваем количество сыгранных матчей
      team1.mp += 1;
      team2.mp += 1;

      // Начисляем очки в зависимости от исхода
      if (outcome === 'win') {
        team1.w += 1;
        team1.p += 3;
        team2.l += 1;
      } else if (outcome === 'loss') {
        team1.l += 1;
        team2.w += 1;
        team2.p += 3;
      } else if (outcome === 'draw') {
        team1.d += 1;
        team1.p += 1;
        team2.d += 1;
        team2.p += 1;
      }
    }

    // Превращаем объект в массив и сортируем
    const sortedTeams = Object.values(teamsData).sort((a, b) => {
      // Сначала сортируем по очкам (по убыванию)
      if (b.p !== a.p) {
        return b.p - a.p;
      }
      // Если очки равны, сортируем по названию (по алфавиту)
      return a.name.localeCompare(b.name);
    });

    // Создаем шапку таблицы
    const header = 'Team                           | MP |  W |  D |  L |  P';
    const rows = [header];

    // Форматируем каждую строку таблицы
    for (const team of sortedTeams) {
      const namePad = team.name.padEnd(30, ' ');
      const mpPad = String(team.mp).padStart(2, ' ');
      const wPad = String(team.w).padStart(2, ' ');
      const dPad = String(team.d).padStart(2, ' ');
      const lPad = String(team.l).padStart(2, ' ');
      const pPad = String(team.p).padStart(2, ' ');

      rows.push(`${namePad} | ${mpPad} | ${wPad} | ${dPad} | ${lPad} | ${pPad}`);
    }

    // Соединяем все строки обратно через символ переноса строки
    return rows.join('\n');
  }
}
