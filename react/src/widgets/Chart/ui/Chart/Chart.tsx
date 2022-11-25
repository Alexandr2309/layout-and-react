import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ChartSidebar } from 'widgets/Chart/ui/ChartSidebar/ChartSidebar';
import { useSelector } from 'react-redux';
import { getTasksIsLoading } from 'entities/Tasks';
import { PageLoader } from 'widgets/PageLoader';
import { ChartView } from '../ChartView/ChartView';
import cls from './Chart.module.scss';

export interface ChartProps {
  className?: string
}

export const Chart = memo((props: ChartProps) => {
  const { className } = props;
  const isLoading = useSelector(getTasksIsLoading);

  return (
    <div className={classNames(cls.Chart, {}, [className])}>
      {isLoading
        ? <PageLoader />
        : (
          <>
            <ChartSidebar
              className={cls.sidebar}
            />
            <ChartView
              className={cls.view}
            />
          </>
        )}
    </div>
  );
});
