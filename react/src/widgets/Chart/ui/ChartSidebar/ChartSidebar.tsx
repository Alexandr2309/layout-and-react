import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getTasksData, ITask } from 'entities/Tasks';
import Accordion from 'shared/ui/Accordion/Accordion';
import { iconsIssue, Icon } from 'entities/Icon';
import cls from './ChartSidebar.module.scss';

export interface ChartSidebarProps {
  className?: string
}

export const ChartSidebar = memo((props: ChartSidebarProps) => {
  const { className } = props;
  const tasks = useSelector(getTasksData);
  const setRef = useRef<Set<number>>(new Set());

  const renderIssue = useCallback((task: ITask, i?: number) => {
    if (task.sub.length > 0 && !setRef.current.has(task.id)) {
      task.sub.forEach((item) => setRef.current.add(item));

      return (
        <Accordion
          className={cls.accordion}
          task={(
            <Icon
              icon={iconsIssue[i]}
              count={task.sub.length}
              label={task.title}
            />
          )}
        >
          {task.sub.map((item) => renderIssue(tasks.find((task) => task.id === item)))}
        </Accordion>
      );
    }
    return null;
  }, []);

  return (
    <div className={classNames(cls.ChartSidebar, {}, [className])}>
      <div className={cls.header}>
        Work item
      </div>
      {/* <div className={cls.accordionWrapper}> */}
      {/*  {tasks.length && tasks.map(renderIssue)} */}
      {/* </div> */}
    </div>
  );
});
