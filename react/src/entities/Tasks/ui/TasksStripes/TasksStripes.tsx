import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getIsMounted } from 'entities/Timeline/model/selectors/getMonths';
import { getDateWithMonth } from 'shared/lib/date';
import { getTasksData } from '../../model/selectors/tasksSelector';
import cls from './TasksStripes.module.scss';
import { TaskStripeItem } from '../TaskStripeItem/TaskStripeItem';

export interface TasksStripesProps {
  className?: string;
  days: string[]
}

export const TasksStripes = memo((props: TasksStripesProps) => {
  const { className, days } = props;
  const isTimelineMounted = useSelector(getIsMounted);
  const tasks = useSelector(getTasksData);

  const weeksDays = useMemo(() => {
    const arrResult = [];
    for (let i = 0; i <= days.length; i += 7) {
      arrResult.push(days.slice(i, i + 7));
    }
    return arrResult;
  }, []);

  const weeksElements = useMemo(() => {
    if (isTimelineMounted) {
      return Array.from(document.querySelectorAll('[data-from]'));
    }
    return null;
  }, [isTimelineMounted]);

  return (
    <div className={classNames(cls.TasksStripes, {}, [className])}>
      {isTimelineMounted && tasks.map((task) => (
        <TaskStripeItem
          key={task.id}
          task={task}
          week={weeksDays.findIndex((week) => week.includes(getDateWithMonth(task.period_start)))}
          weeksElements={weeksElements}
        />
      ))}
    </div>
  );
});
