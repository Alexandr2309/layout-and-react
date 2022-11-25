import { IStateSchema } from 'app/providers/storeProvider';
import { AsyncThunkAction, DeepPartial } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Returned, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Returned, Arg, {rejectValue: RejectedValue}>

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => IStateSchema;

  actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreatorType<Returned, Arg, RejectedValue>,
    state?: DeepPartial<IStateSchema>,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as IStateSchema);
    this.actionCreator = actionCreator;

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      { api: this.api },
    );

    return result;
  }
}
