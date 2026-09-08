module armstrong_numbers
    implicit none

contains

    logical function isArmstrongNumber(i)
        integer, intent(in) :: i
        integer :: temp, digit, num_digits, total_sum
        
        ! Число должно быть положительным
        if (i < 0) then
            isArmstrongNumber = .false.
            return
        end if

        ! Шаг 1: Считаем количество цифр
        num_digits = 0
        temp = i
        do while (temp > 0)
            num_digits = num_digits + 1
            temp = temp / 10
        end do

        ! Особый случай для нуля
        if (i == 0) num_digits = 1

        ! Шаг 2 и 3: Считаем сумму цифр в степени num_digits
        total_sum = 0
        temp = i
        do while (temp > 0)
            digit = mod(temp, 10)
            total_sum = total_sum + digit**num_digits
            temp = temp / 10
        end do

        ! Проверяем равенство исходному числу
        isArmstrongNumber = (total_sum == i)

    end function isArmstrongNumber

end module armstrong_numbers
