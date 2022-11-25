import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApiConfig } from 'app/providers/storeProvider';
import { getTasksData } from 'entities/Tasks';
import { chartActions } from '../slices/chartSlice';

export const initTasks = createAsyncThunk<
void,
void,
IThunkApiConfig<string>>(
  'chart/initTasks',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const tasks = getTasksData(getState());

    tasks.forEach((task) => dispatch(chartActions.initStatus(
      { id: task.id.toString(), value: task.id === 1 },
    )));
  },
);
