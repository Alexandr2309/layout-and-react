import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { fetchTasksData } from './fetchTasksData';

const responseMock = {
  project: 'DMS 2.0',
  period: '02.09.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-09-02',
            period_end: '2022-09-06',
            sub: [
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-09-03',
                period_end: '2022-09-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-09-04',
                    period_end: '2022-09-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-09-05',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

describe('fetchTasksData.ts', () => {
  test('success', async () => {
    const data = responseMock;

    const thunk = new TestAsyncThunk(fetchTasksData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(result.payload).toEqual(data);
    expect(thunk.api.get).toBeCalled();
    expect(thunk.dispatch).toBeCalledTimes(5);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchTasksData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toBeCalled();
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('No data in response');
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
