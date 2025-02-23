export const d_siteTitle = 'Linermao\'s Kiosk';

export const d_startTime = '2023-05-25 13:14:00';

// get the days
const d_days = (start: string) => {
  const now = new Date();
  const startDate = new Date(start);
  const diff = now.getTime() - startDate.getTime();
  
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export const d_runTime = d_days(d_startTime);