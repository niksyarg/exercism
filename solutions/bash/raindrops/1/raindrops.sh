#!/usr/bin/env bash

main() {
    local num=$1
    local result=""

    # Проверка делимости на 3
    if (( num % 3 == 0 )); then
        result+="Pling"
    fi

    # Проверка делимости на 5
    if (( num % 5 == 0 )); then
        result+="Plang"
    fi

    # Проверка делимости на 7
    if (( num % 7 == 0 )); then
        result+="Plong"
    fi

    # Если ни одно условие не выполнилось, выводим само число
    if [[ -z "$result" ]]; then
        echo "$num"
    else
        echo "$result"
    fi
}

main "$@"
