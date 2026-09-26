use std::iter::FromIterator;
use std::marker::PhantomData;

// Вспомогательная структура для узла списка
struct Node<T> {
    data: T,
    next: Option<Box<Node<T>>>,
}

pub struct SimpleLinkedList<T> {
    head: Option<Box<Node<T>>>,
    len: usize,
    // Нам больше не нужен dummy: PhantomData, так как T используется в Option<Box<Node<T>>>
}

impl<T> SimpleLinkedList<T> {
    // Создание нового пустого списка
    pub fn new() -> Self {
        SimpleLinkedList { head: None, len: 0 }
    }

    // Проверка списка на пустоту
    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    }

    // Получение текущей длины списка
    pub fn len(&self) -> usize {
        self.len
    }

    // Добавление элемента в начало списка
    pub fn push(&mut self, element: T) {
        let new_node = Box::new(Node {
            data: element,
            // Метод take() забирает старую «голову», оставляя на её месте None
            next: self.head.take(),
        });
        self.head = Some(new_node);
        self.len += 1;
    }

    // Удаление элемента с начала списка и его возврат
    pub fn pop(&mut self) -> Option<T> {
        self.head.take().map(|node| {
            self.head = node.next;
            self.len -= 1;
            node.data
        })
    }

    // Просмотр значения первого элемента без его удаления
    pub fn peek(&self) -> Option<&T> {
        self.head.as_ref().map(|node| &node.data)
    }

    // Разворот списка (возвращает новый развернутый список)
    pub fn rev(mut self) -> SimpleLinkedList<T> {
        let mut reversed = SimpleLinkedList::new();
        while let Some(element) = self.pop() {
            reversed.push(element);
        }
        reversed
    }
}

// Реализация создания списка из итератора (вызывается при .collect())
impl<T> FromIterator<T> for SimpleLinkedList<T> {
    fn from_iter<I: IntoIterator<Item = T>>(iter: I) -> Self {
        let mut list = SimpleLinkedList::new();
        for item in iter {
            list.push(item);
        }
        list
    }
}

// Преобразование списка в стандартный вектор Vec<T>
// Так как pop() достает элементы с головы, вектор получится в обратном порядке.
// Чтобы сохранить исходный порядок элементов, мы сначала разворачиваем список.
impl<T> From<SimpleLinkedList<T>> for Vec<T> {
    fn from(mut _linked_list: SimpleLinkedList<T>) -> Vec<T> {
        let mut vec = Vec::new();
        let mut reversed = _linked_list.rev();
        while let Some(element) = reversed.pop() {
            vec.push(element);
        }
        vec
    }
}
