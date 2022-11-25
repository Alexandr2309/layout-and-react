import { ITasksSchema } from 'entities/Tasks';
import { AxiosInstance } from 'axios';
import { ITimelineSchema } from 'entities/Timeline';
import { IChartSchema } from 'widgets/Chart';

export interface IStateSchema {
  tasks: ITasksSchema;
  timeline: ITimelineSchema;
  chart: IChartSchema
}

export interface IThunkExtraArgs {
  api: AxiosInstance
}

export interface IThunkApiConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArgs;
  state: IStateSchema
}
