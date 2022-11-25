import { classNames } from 'shared/lib/classNames/classNames';
import {
  CSSProperties,
  memo, useEffect, useMemo, useRef, useState,
} from 'react';
import { getDifferenceYMDString } from 'shared/lib/date';
import { Stripe, StripeColor } from 'shared/ui/Stripe/Stripe';
import { getStripeTheme } from 'shared/ui/Stripe/lib';
import { getCoords } from 'shared/lib/coords';
import { useSelector } from 'react-redux';
import { getStatusTaskForId } from 'widgets/Chart';
import { IStateSchema } from 'app/providers/storeProvider';
import cls from './TaskStripeItem.module.scss';
import { ITask } from '../../model/types/TasksSchema';

export interface TaskStripeItemProps {
  className?: string;
  task: ITask;
  week: number;
  weeksElements: Element[]
}

export const TaskStripeItem = memo((props: TaskStripeItemProps) => {
  const {
    className, task, week, weeksElements,
  } = props;
  const { isCollapse: isTaskCollapse } = useSelector(
    (state: IStateSchema) => getStatusTaskForId(state, task.id.toString()),
  );
  const taskElement = useRef(
    document?.querySelector?.(`[data-task="${task.id}"]`) || undefined,
  );
  const [state, setState] = useState(true);
  const { nesting, period_start: start, period_end: end } = task;

  useEffect(() => {
    if (!taskElement.current && isTaskCollapse) {
      taskElement.current = document.querySelector(`[data-task="${task.id}"]`);
      setState((s) => !s);
    }
  }, [isTaskCollapse]);

  const some = weeksElements[week].nextElementSibling
    .children[+start.split('-')[2] - 1];
  const duringDays = getDifferenceYMDString(start, end);
  const themeStripe = getStripeTheme(nesting);

  const stripeStyles = useMemo(() => ({
    width: some.clientWidth * duringDays,
    left: getCoords(some).left,
    top: taskElement.current ? (getCoords(taskElement.current).top + 12) : 0,
    visibility: isTaskCollapse ? 'visible' : 'hidden',
  }), [taskElement, state]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isTaskCollapse && (
        <Stripe
          theme={themeStripe}
          width={stripeStyles.width}
          left={stripeStyles.left}
          top={stripeStyles.top}
          visibility={stripeStyles.visibility}
          text={task.title}
        />
      )}
    </>

  );
});
