#!/usr/bin/env bash

main() {
    local number="$1"
    local length="${#number}"
    local sum=0


    for (( i=0; i<length; i++ )); do
        local digit="${number:i:1}"
     
        (( sum += digit ** length ))
    done


    if (( sum == number )); then
        echo "true"
    else
        echo "false"
    fi
}


main "$@"
