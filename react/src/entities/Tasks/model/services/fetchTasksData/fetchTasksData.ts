import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApiConfig } from 'app/providers/storeProvider';
import { tasksActions } from 'entities/Tasks';
import { getNormalizeTasks } from '../../../lib';

export const fetchTasksData = createAsyncThunk<void,
void,
IThunkApiConfig<string>>(
  'fetchTasksData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      // use default base url, bind in api config
      const response = await extra.api.get('');

      if (!response) {
        rejectWithValue('error');
      }

      dispatch(tasksActions.setTasks(response.data.chart));
    } catch (e) {
      throw new Error(e);
    }
  },
);
