import { createSelector } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/storeProvider';

const getStatusTasks = (state: IStateSchema) => state.chart.status;
export const getStatusTaskForId = createSelector(
  getStatusTasks,
  (state: IStateSchema, id: string) => id,
  (status, id) => status.find((item) => item.id === id),
);
