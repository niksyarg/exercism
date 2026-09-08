module darts
  implicit none

contains

  function score(x, y) result(points)
    real, intent(in) :: x, y
    integer :: points
    real :: r_squared

  
    r_squared = x**2 + y**2

   
    if (r_squared <= 1.0) then
       points = 10
    else if (r_squared <= 25.0) then
       points = 5
    else if (r_squared <= 100.0) then
       points = 1
    else
       points = 0
    end if

  end function score

end module darts
