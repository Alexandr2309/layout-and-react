import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

export interface IStoreProvider {
  children: ReactNode
}

export const StoreProvider = (props: IStoreProvider) => {
  const { children } = props;

  const store = createReduxStore();

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
