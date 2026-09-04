module binary_search
  implicit none
contains

  function find(array, val) result(idx)
    integer, dimension(:), intent(in) :: array
    integer, intent(in) :: val
    integer :: idx
    
    integer :: low, high, mid

    low = 1
    high = size(array)
    idx = -1  ! Если число не найдено, вернем -1

    do while (low <= high)
      mid = low + (high - low) / 2

      if (array(mid) == val) then
        idx = mid
        return
      else if (array(mid) < val) then
        low = mid + 1
      else
        high = mid - 1
      end if
    end do

  end function

end module
