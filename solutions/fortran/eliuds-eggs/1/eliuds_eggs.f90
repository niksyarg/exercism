module eliuds_eggs
  implicit none
contains

  integer function eggCount(number)
    integer :: number
    integer :: temp_number
    
    eggCount = 0
    temp_number = number
    
   
    do while (temp_number > 0)

      eggCount = eggCount + iand(temp_number, 1)
      
   
      temp_number = ishft(temp_number, -1)
    end do
    
  end function eggCount

end module eliuds_eggs
