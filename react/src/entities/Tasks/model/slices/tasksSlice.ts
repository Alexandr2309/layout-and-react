import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      const excludeId = [];
      // const resultTasks = [];

      const subTasks = action.payload.sub.map((sub) => {
        excludeId.push(sub.id);
        return sub.id;
      });

      state.tasks.push({ ...action.payload, sub: subTasks });
    },
  },
});

export const { actions: tasksActions } = tasksSlice;
export const { reducer: tasksReducer } = tasksSlice;
