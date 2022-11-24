import { IResponseTask, IResponseTasks, ITask } from '../model/types/TasksSchema';

const testTasks: IResponseTasks = {
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

export function getNormalizeTasks() {
  const resultTasks: Set<ITask> = new Set();

  return {
    resultTasks,
    func: function testFunc(tasks: IResponseTask[] = [testTasks.chart]) {
      // eslint-disable-next-line consistent-return
      tasks.forEach((task) => {
        if (!task.sub) {
          resultTasks.add({ ...task, sub: [] });
          return undefined;
        }
        const subTasks = task.sub.map((sub) => sub.id);
        resultTasks.add({ ...task, sub: subTasks });
        testFunc(task.sub);
      });
    },
  };
}
