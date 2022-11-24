export const months = Array.from(
  { length: 12 },
  (e, i) => new Date(null, i + 1, null).toLocaleDateString('en', { month: 'short' }),
);

export const dayInMonthsWithName = Array.from(
  { length: 12 },
  (e, i) => {
    const dayCount = +new Date(null, i + 1, null).toLocaleDateString('en', { day: 'numeric' });
    const month = new Date(null, i + 1, null).toLocaleDateString('en', { month: 'short' });
    return Array.from({ length: dayCount }, (_, index) => `${index + 1} ${month}`);
  },
);

export const dayInMonths = dayInMonthsWithName.map((item) => (
  item.map((day) => day.replace(/\D/g, ''))
));
