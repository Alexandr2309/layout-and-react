import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ChartSidebar } from 'widgets/Chart/ui/ChartSidebar/ChartSidebar';
import cls from './Chart.module.scss';
import { ChartView } from '../ChartView/ChartView';

export interface ChartProps {
  className?: string
}

export const Chart = memo((props: ChartProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Chart, {}, [className])}>
      <ChartSidebar
        className={cls.sidebar}
      />
      <ChartView
        className={cls.view}
      />
    </div>
  );
});
