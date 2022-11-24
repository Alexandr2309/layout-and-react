import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TimelineDayItem.module.scss';

export interface TimelineDayItemProps {
  className?: string;
  day: string;
}

export const TimelineDayItem = memo((props: TimelineDayItemProps) => {
  const { className, day } = props;

  return (
    <li
      className={classNames(cls.TimelineDayItem, {}, [className])}
    >
      {day}
    </li>
  );
});
