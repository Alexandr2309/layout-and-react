import { IResponseTask, ITask } from '../model/types/TasksSchema';

// const dateOptions = { day: 'numeric', month: 'short' };

export function getNormalizeTasks() {
  const resultTasks: Set<ITask> = new Set();

  return {
    resultTasks,
    func: function normalizeTasks(tasks: IResponseTask[], nesting = 1) {
      // eslint-disable-next-line consistent-return
      tasks.forEach((task) => {
        if (!task.sub) {
          resultTasks.add({ ...task, sub: [], nesting });
          return undefined;
        }
        const subTasks = task.sub.map((sub) => sub.id);
        resultTasks.add({ ...task, sub: subTasks, nesting });
        normalizeTasks(task.sub, nesting + 1);
      });
    },
  };
}
