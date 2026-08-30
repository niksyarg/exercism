module acronym
  implicit none
contains

  function abbreviate(s)
    character(len=*), intent(in) :: s
    character(len=len_trim(s)) :: abbreviate
    
    integer :: i, n, acro_len
    character :: ch, prev_ch
    character(len=len_trim(s)) :: temp_s
    
    ! Инициализация переменных
    abbreviate = ""
    acro_len = 0
    n = len_trim(s)
    
    if (n == 0) return
    
    ! Приводим всю строку к верхнему регистру и заменяем дефисы на пробелы
    do i = 1, n
       ch = s(i:i)
       if (ch == '-') then
          temp_s(i:i) = ' '
       else if (ch >= 'a' .and. ch <= 'z') then
          temp_s(i:i) = char(ichar(ch) - 32)
       else
          temp_s(i:i) = ch
       end if
    end do
    
    ! Выделяем первую букву первого слова
    prev_ch = ' '
    
    ! Проходим по строке и собираем первые буквы слов
    do i = 1, n
       ch = temp_s(i:i)
       
       ! Если текущий символ — буква, а предыдущий — пробел, это начало слова
       if (ch >= 'A' .and. ch <= 'Z') then
          if (prev_ch == ' ') then
             acro_len = acro_len + 1
             abbreviate(acro_len:acro_len) = ch
          end if
       end if
       
       ! Обновляем предыдущий символ (апострофы и знаки препинания не ломают логику)
       if (ch == ' ' .or. (ch >= 'A' .and. ch <= 'Z')) then
          prev_ch = ch
       end if
    end do

  end function abbreviate

end module acronym
