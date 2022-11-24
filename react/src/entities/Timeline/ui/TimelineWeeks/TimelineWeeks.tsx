import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { TimelineWeekHeader } from '../TimelineWeekHeader/TimelineWeekHeader';
import cls from './TimelineWeeks.module.scss';
import { TimelineDays } from '../TimelineDays/TimelineDays';

export interface TimelineWeeksProps {
  className?: string;
  days: string[];
  from: string
  to: string;
}

export const TimelineWeeks = memo((props: TimelineWeeksProps) => {
  const {
    className, days, from, to,
  } = props;
  return (
    <div className={classNames(cls.TimelineWeeks, {}, [className])}>
      {(from || to) && (
        <TimelineWeekHeader
          from={from}
          to={to}
        />
      )}
      <TimelineDays
        days={days}
      />
    </div>
  );
});
