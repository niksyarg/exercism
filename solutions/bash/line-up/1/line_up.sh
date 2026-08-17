#!/usr/bin/env bash

main() {
    # Сохраняем переданные аргументы в переменные
    local name="$1"
    local num="$2"

    # Получаем две последние цифры для проверки исключений (11, 12, 13)
    local last_two=$(( num % 100 ))
    # Получаем последнюю цифру для базовых правил
    local last_digit=$(( num % 10 ))

    local suffix="th"

    # Проверяем исключения: числа, заканчивающиеся на 11, 12, 13
    if (( last_two == 11 || last_two == 12 || last_two == 13 )); then
        suffix="th"
    # Если не исключение, проверяем последнюю цифру
    elif (( last_digit == 1 )); then
        suffix="st"
    elif (( last_digit == 2 )); then
        suffix="nd"
    elif (( last_digit == 3 )); then
        suffix="rd"
    fi

    # Выводим готовую фразу в точном соответствии с примером
    echo "${name}, you are the ${num}${suffix} customer we serve today. Thank you!"
}

# Вызываем главную функцию и передаем ей все позиционные аргументы
main "$@"
