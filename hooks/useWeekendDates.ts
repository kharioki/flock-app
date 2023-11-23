export const useWeekendDates = () => {
  const today = new Date();
  const saturday = new Date(today);
  const sunday = new Date(today);

  // Calculate days until Saturday (6) and Sunday (0)
  const daysUntilSaturday = (6 - today.getDay() + 7) % 7;
  const daysUntilSunday = (0 - today.getDay() + 7) % 7;

  // Set dates for Saturday and Sunday of the current week
  saturday.setDate(today.getDate() + daysUntilSaturday);
  sunday.setDate(today.getDate() + daysUntilSunday);

  return {
    saturday: saturday.toISOString().split('T')[0],
    sunday: sunday.toISOString().split('T')[0]
  };
}
