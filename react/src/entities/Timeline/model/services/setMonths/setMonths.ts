import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkApiConfig } from 'app/providers/storeProvider';
import { getTasksData, getTasksPeriod } from 'entities/Tasks';
import { timelineActions } from 'entities/Timeline/model/slices/timelineSlice';

export const setMonths = createAsyncThunk<
void,
void,
IThunkApiConfig<string>>(
  'timeline/setMonths',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;

    const tasks = getTasksData(getState());
    let minMonth = 12;
    let minDate = '';

    const endDateState = getTasksPeriod(getState())
      .split('-')[1];
    const monthEnd = +endDateState
      .split('.')[1];

    tasks.forEach((task) => {
      const month = +task.period_start.split('-')[1];
      if (month < minMonth) {
        minMonth = month;
        minDate = task.period_start;
      }
    });

    dispatch(timelineActions.setEndMonth(monthEnd - 1));
    dispatch(timelineActions.setStartMonth(minMonth - 1));
  },
);
