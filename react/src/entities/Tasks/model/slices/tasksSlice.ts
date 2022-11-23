import { createSlice } from '@reduxjs/toolkit';
import { ITasksSchema } from '../types/TasksSchema';

const initialState: ITasksSchema = {
  title: '',
  period: '',
  isLoading: false,
  tasks: [],
  error: undefined,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export const { actions: tasksActions } = tasksSlice;
export const { reducer: tasksReducer } = tasksSlice;
