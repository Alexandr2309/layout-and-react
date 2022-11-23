import { IStateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const getTasksData = (state: IStateSchema) => state.tasks.tasks || [];
export const getTasksError = (state: IStateSchema) => state.tasks.error ?? '';
export const getTasksIsLoading = (state: IStateSchema) => state.tasks.isLoading ?? false;
export const getTasksTitle = (state: IStateSchema) => state.tasks.title ?? '';
export const getTasksPeriod = (state: IStateSchema) => state.tasks.period ?? '';
