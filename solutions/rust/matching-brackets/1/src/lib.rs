pub fn brackets_are_balanced(string: &str) -> bool {
    let mut stack = Vec::new();

    for ch in string.chars() {
        match ch {
            // Если скобка открывающая, кладем её в стек
            '(' | '[' | '{' => stack.push(ch),
            
            // Если закрывающая, проверяем совпадение с верхней скобкой в стеке
            ')' => if stack.pop() != Some('(') { return false; },
            ']' => if stack.pop() != Some('[') { return false; },
            '}' => if stack.pop() != Some('{') { return false; },
            
            // Все остальные символы (буквы, цифры, пробелы) просто игнорируем
            _ => {}
        }
    }

    // Если стек пустой, значит у всех скобок нашлась пара
    stack.is_empty()
}
