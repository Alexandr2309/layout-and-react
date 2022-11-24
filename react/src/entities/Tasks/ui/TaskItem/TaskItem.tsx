import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TaskItem.module.scss';

export interface TaskItemProps {
  className?: string
}

export const TaskItem = memo((props: TaskItemProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.TaskItem, {}, [className])} />
  );
});
