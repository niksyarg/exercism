module isogram
  implicit none

contains

  function isIsogram(phrase) result(no_repeats)
    character(len=*), intent(in) :: phrase
    logical :: no_repeats
    
    logical :: used(26)
    integer :: i, c, code
    character :: ch

    ! Инициализируем массив использованных букв ложными значениями
    used = .false.
    no_repeats = .true.

    ! Проходим по каждому символу в строке
    do i = 1, len(phrase)
       ch = phrase(i:i)
       code = iachar(ch)

       ! Приводим символ к нижнему регистру, если это заглавная буква
       if (code >= iachar('A') .and. code <= iachar('Z')) then
          code = code + (iachar('a') - iachar('A'))
       end if

       ! Проверяем, является ли символ английской буквой
       if (code >= iachar('a') .and. code <= iachar('z')) then
          c = code - iachar('a') + 1
          
          ! Если буква уже встречалась, это не изограмма
          if (used(c)) then
             no_repeats = .false.
             return
          else
             used(c) = .true.
          end if
       end if
    end do

  end function isIsogram

end module isogram
