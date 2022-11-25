import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApiConfig } from 'app/providers/storeProvider';
import { tasksActions } from 'entities/Tasks';
import { IResponseTasks } from 'entities/Tasks/model/types/TasksSchema';
import { AxiosResponse } from 'axios';

export const fetchTasksData = createAsyncThunk<
IResponseTasks,
void,
IThunkApiConfig<string>>(
  'fetchTasksData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      // use default base url, bind in api config
      const response: AxiosResponse<IResponseTasks> = await extra.api.get('');

      if (!response.data) {
        throw new Error();
      }

      dispatch(tasksActions.setTitle(response.data.project));
      dispatch(tasksActions.setPeriod(response.data.period));
      dispatch(tasksActions.setTasks(response.data.chart));
      return response.data;
    } catch (e) {
      return rejectWithValue('No data in response');
    }
  },
);
