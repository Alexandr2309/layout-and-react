import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChartSchema } from '../types/chartSchema';

const initialState: IChartSchema = {
  status: [],
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<{id: string, isCollapse: boolean}>) => {
      const element = state.status.find((item) => item.id === action.payload.id);
      if (element) element.isCollapse = action.payload.isCollapse;
    },
    initStatus: (state, action) => {
      state.status.push({ id: action.payload.id, isCollapse: action.payload.value });
    },
  },
});

export const { actions: chartActions } = chartSlice;
export const { reducer: chartReducer } = chartSlice;
