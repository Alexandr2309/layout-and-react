import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasksData } from 'entities/Tasks/model/services/fetchTasksData/fetchTasksData';
import { getNormalizeTasks } from 'entities/Tasks/lib';
import { IResponseTask, ITask, ITasksSchema } from '../types/TasksSchema';

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
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setPeriod: (state, action: PayloadAction<string>) => {
      state.period = action.payload;
    },
    setTasks: (state, action: PayloadAction<IResponseTask>) => {
      const normalizeTasksObj = getNormalizeTasks();
      normalizeTasksObj.func([action.payload]);

      state.tasks = Array.from(normalizeTasksObj.resultTasks);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
      .addCase(fetchTasksData.fulfilled, (state) => {
        state.error = undefined;
        state.isLoading = false;
      })
      .addCase(fetchTasksData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: tasksActions } = tasksSlice;
export const { reducer: tasksReducer } = tasksSlice;
