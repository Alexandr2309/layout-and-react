import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Timeline } from 'entities/Timeline';
import cls from './ChartView.module.scss';

export interface ChartViewProps {
  className?: string
}

export const ChartView = memo((props: ChartViewProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.ChartView, {}, [className])}>
      <div className={cls.shadow} />
      <Timeline
        className={cls.timeline}
      />
    </div>
  );
});
