import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { tasksReducer } from 'entities/Tasks';
import { $api } from 'shared/api';
import { timelineReducer } from 'entities/Timeline';
import { chartReducer } from 'widgets/Chart';
import { IStateSchema, IThunkExtraArgs } from './stateSchema';

export function createReduxStore() {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    tasks: tasksReducer,
    timeline: timelineReducer,
    chart: chartReducer,
  };

  const extraArgs: IThunkExtraArgs = {
    api: $api,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS__DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArgs,
      },
    }),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
