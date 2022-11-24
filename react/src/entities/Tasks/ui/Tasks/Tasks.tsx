import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Tasks.module.scss';

export interface TasksProps {
  className?: string
}

export const Tasks = memo((props: TasksProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Tasks, {}, [className])} />
  );
});
