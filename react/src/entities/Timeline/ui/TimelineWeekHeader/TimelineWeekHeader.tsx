import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TimelineWeekHeader.module.scss';

export interface TimelineWeekHeaderProps {
  className?: string;
  from: string;
  to: string
}

export const TimelineWeekHeader = memo((props: TimelineWeekHeaderProps) => {
  const { className, to, from } = props;

  const dataAttribute = { 'data-to': to, 'data-from': from };

  return (
    <div
      {...dataAttribute}
      className={classNames(cls.TimelineWeekHeader, {}, [className])}
    >
      <span>
        {from}
      </span>
      &nbsp;-&nbsp;
      <span>
        {to}
      </span>
    </div>
  );
});
