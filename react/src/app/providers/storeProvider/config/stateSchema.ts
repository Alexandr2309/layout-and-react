import { ITasksSchema } from 'entities/Tasks';
import { AxiosInstance } from 'axios';
import { ITimelineSchema } from 'entities/Timeline';

export interface IStateSchema {
  tasks: ITasksSchema;
  timeline: ITimelineSchema
}

export interface IThunkExtraArgs {
  api: AxiosInstance
}

export interface IThunkApiConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArgs;
  state: IStateSchema
}
