import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApiConfig } from 'app/providers/storeProvider';
import { tasksActions } from 'entities/Tasks';
import { IResponseTask, IResponseTasks } from 'entities/Tasks/model/types/TasksSchema';
import { AxiosResponse } from 'axios';

export const fetchTasksData = createAsyncThunk<
void,
void,
IThunkApiConfig<string>>(
  'fetchTasksData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      // use default base url, bind in api config
      const response: AxiosResponse<IResponseTasks> = await extra.api.get('');

      if (!response) {
        rejectWithValue('error');
      }

      dispatch(tasksActions.setTitle(response.data.project));
      dispatch(tasksActions.setPeriod(response.data.period));
      dispatch(tasksActions.setTasks(response.data.chart));
    } catch (e) {
      throw new Error(e);
    }
  },
);
