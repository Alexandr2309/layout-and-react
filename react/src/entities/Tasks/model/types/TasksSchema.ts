type d = 1|2|3|4|5|6|7|8|9|0;
type YYYY = `19${d}${d}` | `20${d}${d}` | `21${d}${d}` | `22${d}${d}`;
type oneToNine = 1|2|3|4|5|6|7|8|9;
type MM = `0${oneToNine}` | `1${0|1|2}`;
type DD = `${0}${oneToNine}` | `${1|2}${d}` | `3${0|1}`;

export type DateYMString = `${YYYY}-${MM}`;
// @ts-ignore
export type DateYMDString = `${DateYMString}-${DD}`;

export interface ITask {
  id: string,
  title: string,
  period_start: string,
  period_end: DateYMDString,
  sub?: ITask[]
}

export interface ITasksSchema {
  isLoading: boolean;
  error?: string;
  tasks: ITask[]
}
