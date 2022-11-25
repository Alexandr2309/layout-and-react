import { classNames } from 'shared/lib/classNames/classNames';
import {
  memo, useCallback, useEffect, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { getTasksData, ITask } from 'entities/Tasks';
import Accordion from 'shared/ui/Accordion/Accordion';
import { Icon, iconsIssue } from 'entities/Icon';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { chartActions } from 'widgets/Chart';
import { initTasks } from '../../model/services/initTasks';
import cls from './ChartSidebar.module.scss';

export interface ChartSidebarProps {
  className?: string
}

export const ChartSidebar = memo((props: ChartSidebarProps) => {
  const { className } = props;
  const tasks = useSelector(getTasksData);
  const setRef = useRef<Set<number>>(new Set());
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tasks.length) {
      dispatch(initTasks());
    }
  }, [tasks]);

  const setStatusTask = (ids: number[]) => (isCollapse: boolean) => {
    ids.forEach((id) => dispatch(chartActions.setStatus({ id: String(id), isCollapse })));
  };

  const renderIssue = useCallback((task: ITask) => {
    if (task.sub.length > 0 && !setRef.current.has(task.id)) {
      setRef.current.add(task.id);

      const attrs = { 'data-task': String(task.id) };

      return (
        <Accordion
          key={task.id}
          dataAtrs={attrs}
          className={cls.accordion}
          style={{ paddingLeft: 20 * task.nesting }}
          cb={setStatusTask(task.sub)}
          task={(
            <Icon
              icon={iconsIssue[task.nesting > 4 ? 4 : task.nesting - 1]}
              count={task?.sub.length}
              label={task.title}
            />
          )}
        >
          {task.sub.map((item) => renderIssue(tasks.find((task) => task.id === item)))}
        </Accordion>
      );
    }

    if (!setRef.current.has(task.id)) {
      setRef.current.add(task.id);
      const attrs = { 'data-task': String(task.id) };
      return (
        <Icon
          dataAtrs={attrs}
          key={task.id}
          icon={iconsIssue[task.nesting > 4 ? 4 : task.nesting - 1]}
          count={task?.sub.length || '0'}
          className={cls.accordion}
          label={task.title}
          styles={{ paddingLeft: 36 * (task.nesting - 1) - 20 }}
        />
      );
    }
    return null;
  }, [tasks]);

  return (
    <div className={classNames(cls.ChartSidebar, {}, [className])}>
      <div className={cls.header}>
        Work item
      </div>
      <div className={cls.accordionWrapper}>
        {tasks.length > 0 && (
          <>
            <div style={{ height: 43 }} className={cls.accordion} />
            {tasks.map(renderIssue)}
          </>
        )}
      </div>
    </div>
  );
});
