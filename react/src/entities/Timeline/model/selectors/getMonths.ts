import { IStateSchema } from 'app/providers/storeProvider';

export const getStartMonth = (state: IStateSchema) => state.timeline.startMonth ?? 0;
export const getEndMonth = (state: IStateSchema) => state.timeline.endMonth ?? 1;
export const getIsMounted = (state: IStateSchema) => state.timeline._mounted ?? false;
