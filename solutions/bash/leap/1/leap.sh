#!/usr/bin/env bash

main() {

    if [[ $# -ne 1 ]]; then
        echo "Usage: leap.sh <year>"
        exit 1
    fi


    if [[ ! "$1" =~ ^[0-9]+$ ]]; then
        echo "Usage: leap.sh <year>"
        exit 1
    fi

    year=$1

    
    if (( year % 4 == 0 )) && { (( year % 100 != 0 )) || (( year % 400 == 0 )); }; then
        echo "true"
    else
        echo "false"
    fi
}


main "$@"
