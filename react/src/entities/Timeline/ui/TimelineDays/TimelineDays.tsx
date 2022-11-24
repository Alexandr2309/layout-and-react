import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TimelineDays.module.scss';
import { TimelineDayItem } from '../TimelineDayItem/TimelineDayItem';

export interface TimelineDaysProps {
  className?: string;
  days: string[];
}

export const TimelineDays = memo((props: TimelineDaysProps) => {
  const { className, days } = props;

  const dataAttrs = { 'data-mission': 'days' };

  return (
    <ul
      {...dataAttrs}
      className={classNames(cls.TimelineDays, {}, [className])}
    >
      {days.map((day, index) => (
        <TimelineDayItem
          day={day}
          key={day}
          className={cls.day}
        />
      ))}
    </ul>
  );
});
