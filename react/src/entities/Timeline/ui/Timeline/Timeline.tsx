import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getTasksData, getTasksIsLoading } from 'entities/Tasks';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { timelineActions } from 'entities/Timeline';
import { TasksStripes } from 'entities/Tasks/ui/TasksStripes/TasksStripes';
import { getEndMonth, getStartMonth } from '../../model/selectors/getMonths';
import { dayInMonths, dayInMonthsWithName } from '../../model/types/time';
import { setMonths } from '../../model/services/setMonths/setMonths';
import cls from './Timeline.module.scss';
import { TimelineWeeks } from '../TimelineWeeks/TimelineWeeks';

export interface TimelineProps {
  className?: string
}

export const Timeline = memo((props: TimelineProps) => {
  const { className } = props;
  const tasksData = useSelector(getTasksData);
  const isLoading = useSelector(getTasksIsLoading);
  const dispatch = useAppDispatch();
  const endMonth = useSelector(getEndMonth);
  const startMonth = useSelector(getStartMonth);

  useEffect(() => {
    if (tasksData.length > 0 && !isLoading) {
      dispatch(setMonths());
    }
  }, [tasksData, isLoading]);

  const fullWeeks = useMemo(() => {
    if (startMonth) {
      const currentMonthsWithNames = dayInMonthsWithName.slice(startMonth, endMonth + 1).flat();
      const currentMonths = dayInMonths.slice(startMonth, endMonth + 1).flat();

      return {
        dayMonthsWithNames: currentMonthsWithNames,
        dayInMonths: currentMonths,
      };
    }
    return false;
  }, [startMonth]);

  useEffect(() => {
    if (fullWeeks) {
      dispatch(timelineActions.setMounted(true));
    }
  }, [fullWeeks]);

  return (
    <div className={classNames(cls.Timeline, {}, [className])}>
      {fullWeeks && fullWeeks.dayInMonths.map((day, index) => (index % 7 === 0
        ? (
          <TimelineWeeks
            className={cls.week}
            key={fullWeeks.dayMonthsWithNames[index]}
            days={fullWeeks.dayInMonths.slice(index, index + 7)}
            from={fullWeeks.dayMonthsWithNames[index]}
            to={
              fullWeeks.dayMonthsWithNames[index + 6]
              || fullWeeks.dayMonthsWithNames[fullWeeks.dayMonthsWithNames.length - 1]
            }
          />
        )
        : null))}
      {fullWeeks && <TasksStripes />}
    </div>
  );
});
