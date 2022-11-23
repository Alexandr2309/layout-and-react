import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from 'entities/Tasks/model/types/TasksSchema';
import { IThunkApiConfig } from 'app/providers/storeProvider';

export const fetchTasksData = createAsyncThunk<ITask[],
void,
IThunkApiConfig<string>>(
  'fetchTasksData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    try {
      // use default base url, bind in api config
      const response = await extra.api.get('');
      console.log(response);
      if (!response) {
        rejectWithValue('error');
      }

      return response.data;
    } catch (e) {
      throw new Error(e);
    }
  },
);
