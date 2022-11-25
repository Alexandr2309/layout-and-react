import { ITasksSchema } from 'entities/Tasks';
import { IResponseTask } from 'entities/Tasks/model/types/TasksSchema';
import { tasksReducer, tasksActions } from './tasksSlice';

const initialState: ITasksSchema = {
  title: '',
  period: '',
  isLoading: false,
  tasks: [],
  error: undefined,
};
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

const tasksResultFromMock = [
  {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      2,
    ],
    nesting: 1,
  },
  {
    id: 2,
    title: 'Banners for social networks',
    period_start: '2022-09-02',
    period_end: '2022-09-07',
    sub: [
      3,
    ],
    nesting: 2,
  },
  {
    id: 3,
    title: 'Choosing a platform for ads',
    period_start: '2022-09-02',
    period_end: '2022-09-06',
    sub: [
      4,
    ],
    nesting: 3,
  },
  {
    id: 4,
    title: 'Custom issue level #4',
    period_start: '2022-09-03',
    period_end: '2022-09-05',
    sub: [
      5,
      6,
    ],
    nesting: 4,
  },
  {
    id: 5,
    title: 'Custom issue level #5',
    period_start: '2022-09-04',
    period_end: '2022-09-05',
    sub: [],
    nesting: 5,
  },
  {
    id: 6,
    title: 'Custom task',
    period_start: '2022-09-05',
    period_end: '2022-09-05',
    sub: [],
    nesting: 5,
  },
];

describe('tasksSlice', () => {
  test('setTitle success', () => {
    expect(
      tasksReducer(
        initialState,
        tasksActions.setTitle('result'),
      ),
    ).toEqual({ ...initialState, title: 'result' });
  });

  test('setPeriod success', () => {
    expect(
      tasksReducer(
        initialState,
        tasksActions.setPeriod('2022-09-02'),
      ),
    ).toEqual({ ...initialState, period: '2022-09-02' });
  });

  test('setTasks success', () => {
    expect(
      tasksReducer(
        initialState,
        tasksActions.setTasks(responseMock.chart as IResponseTask),
      ),
    ).toEqual({ ...initialState, tasks: tasksResultFromMock });
  });
});
