import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITask } from 'entities/Tasks/model/types/TasksSchema';
import { IThunkApiConfig } from 'app/providers/storeProvider';

export const fetchTasksData = createAsyncThunk<
ITask[],
void,
IThunkApiConfig<string>>(
  'fetchTasksData',
  async (_, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;

    const response = await extra.api.get();
  },
);
