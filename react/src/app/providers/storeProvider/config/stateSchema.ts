import { ITasksSchema } from 'entities/Tasks';
import { AxiosInstance } from 'axios';

export interface IStateSchema {
  tasks: ITasksSchema
}

export interface IThunkExtraArgs {
  api: AxiosInstance
}

export interface IThunkApiConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArgs;
  state: IStateSchema
}
