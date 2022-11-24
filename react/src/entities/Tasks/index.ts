export {
  ITasksSchema, DateYMDString, DateYMString, ITask,
} from './model/types/TasksSchema';
export { tasksReducer, tasksActions } from './model/slices/tasksSlice';
export {
  getTasksData, getTasksPeriod, getTasksError, getTasksIsLoading, getTasksTitle,
} from './model/selectors/tasksSelector';
