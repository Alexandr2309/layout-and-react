import { createSlice } from '@reduxjs/toolkit';
import { ITimelineSchema } from '../types/timelineSchema';

const initialState: ITimelineSchema = {
  endMonth: undefined,
  startMonth: undefined,
  _mounted: false,
};

export const timelineSlice = createSlice({
  name: 'timeline',
  initialState,
  reducers: {
    setStartMonth: (state, action) => {
      state.startMonth = action.payload;
    },
    setEndMonth: (state, action) => {
      state.endMonth = action.payload;
    },
    setMounted: (state, action) => {
      state._mounted = action.payload;
    },
  },
});

export const { actions: timelineActions } = timelineSlice;
export const { reducer: timelineReducer } = timelineSlice;
