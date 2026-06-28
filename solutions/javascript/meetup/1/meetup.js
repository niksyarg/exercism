const WEEKDAYS = {
  'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
  'Thursday': 4, 'Friday': 5, 'Saturday': 6
};

export const meetup = (year, month, week, dayOfWeek) => {
  const targetDay = WEEKDAYS[dayOfWeek];
  let candidates = [];


  const date = new Date(year, month - 1, 1);
  while (date.getMonth() === month - 1) {
    if (date.getDay() === targetDay) {
      candidates.push(date.getDate());
    }
    date.setDate(date.getDate() + 1);
  }


  let day;
  switch (week) {
    case 'first':  day = candidates[0]; break;
    case 'second': day = candidates[1]; break;
    case 'third':  day = candidates[2]; break;
    case 'fourth': day = candidates[3]; break;
    case 'last':   day = candidates[candidates.length - 1]; break;
    case 'teenth': 
 
      day = candidates.find(d => d >= 13 && d <= 19);
      break;
  }

  return new Date(year, month - 1, day);
};
