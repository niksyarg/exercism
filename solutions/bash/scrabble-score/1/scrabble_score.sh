#!/usr/bin/env bash

# Переводим аргумент в верхний регистр
word="${1^^}"
score=0

# Проходим по каждому символу строки
for (( i=0; i<${#word}; i++ )); do
    char="${word:$i:1}"
    
    case "$char" in
        [AEIOULNRST]) ((score += 1)) ;;
        [DG])         ((score += 2)) ;;
        [BCMP])       ((score += 3)) ;;
        [FHVWY])      ((score += 4)) ;;
        [K])          ((score += 5)) ;;
        [JX])         ((score += 8)) ;;
        [QZ])         ((score += 10)) ;;
    esac
done

echo "$score"
