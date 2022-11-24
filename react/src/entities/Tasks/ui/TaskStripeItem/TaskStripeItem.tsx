import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TaskStripeItem.module.scss';
import { ITask } from '../../model/types/TasksSchema';

export interface TaskStripeItemProps {
  className?: string;
  task: ITask
}

export const TaskStripeItem = memo((props: TaskStripeItemProps) => {
  const { className, task } = props;
  return (
    <div className={classNames(cls.TaskStripeItem, {}, [className])} />
  );
});
