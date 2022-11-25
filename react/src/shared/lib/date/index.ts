import { DateYMDString, DateYMString } from 'entities/Tasks';

export const getDateWithMonth = (
  string: DateYMString | DateYMDString,
) => {
  const result = new Date(string).toLocaleDateString('en', { month: 'short', day: 'numeric' });
  return result.split(' ')
    .reverse()
    .join(' ');
};

export const getDifferenceYMDString = (start: DateYMDString, end:DateYMDString) => (
  new Date(end).getTime() - new Date(start).getTime()
)
  / (1000 * 3600 * 24) + 1;
