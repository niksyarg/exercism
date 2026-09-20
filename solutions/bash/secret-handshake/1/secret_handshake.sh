#!/usr/bin/env bash

# Сохраняем переданное число
num=$1

# Инициализируем массив для хранения действий
actions=()

# Проверяем каждый бит с помощью побитового И (&&)

# 1-й бит (00001): wink
(( num & 1 )) && actions+=("wink")

# 2-й бит (00010): double blink
(( num & 2 )) && actions+=("double blink")

# 3-й бит (00100): close your eyes
(( num & 4 )) && actions+=("close your eyes")

# 4-й бит (01000): jump
(( num & 8 )) && actions+=("jump")

# 5-й бит (10000): разворот массива действий
if (( num & 16 )); then
    reversed_actions=()
    for (( i=${#actions[@]}-1; i>=0; i-- )); do
        reversed_actions+=("${actions[i]}")
    done
    actions=("${reversed_actions[@]}")
fi

# Выводим результат через запятую с пробелом
(
    IFS=","
    echo "${actions[*]}"
)
