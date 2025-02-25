export function TimeTips(){
  const date = new Date().getHours();
  let time = '';
  if (date >= 0 && date < 12) {
    time = 'Good morning';
  } else if (date >= 12 && date < 18) {
    time = 'Good afternoon';
  } else {
    time = 'Good evening';
  }
  return time;
}