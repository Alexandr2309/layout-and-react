import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsMounted } from 'entities/Timeline/model/selectors/getMonths';
import { getTasksData } from '../../model/selectors/tasksSelector';
import cls from './TasksStripes.module.scss';
import { TaskStripeItem } from '../TaskStripeItem/TaskStripeItem';

export interface TasksStripesProps {
  className?: string
}

export const TasksStripes = memo((props: TasksStripesProps) => {
  const { className } = props;
  const isTimelineMounted = useSelector(getIsMounted);
  const tasks = useSelector(getTasksData);

  return (
    <div className={classNames(cls.TasksStripes, {}, [className])}>
      {isTimelineMounted && tasks.map((task) => (
        <TaskStripeItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
});
