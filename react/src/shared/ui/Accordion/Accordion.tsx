import React, {
  FC, HTMLProps, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ChevronDown from 'shared/assets/icons/chevron_down.svg';
import cls from './Accordion.module.scss';

export interface IAccordionProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  viewCls?: string;
  task?: ReactNode;
}

const Accordion: FC<IAccordionProps> = ({
  children,
  className,
  viewCls,
  task,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [heightEl, setHeightEl] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current && setHeightEl(ref.current.scrollHeight + 24);
  }, []);

  const setIsShow = useCallback(() => {
    setShow((s) => !s);
  }, []);

  const modsToggler = {
    [cls.show]: show,
    [cls.visible]: false,
  };

  return (
    <div className={classNames(cls.Accordion, {}, [className])}>
      <div className={classNames(cls.view, {}, [viewCls])}>
        <Button
          onClick={setIsShow}
          theme={ThemeButton.CLEAR}
          className={classNames(cls.toggler, modsToggler , [])}
        >
          <ChevronDown />
        </Button>
        {task}
      </div>
      <div className={cls.line} />
      <div
        ref={ref}
        className={classNames(cls.contentWrapper, { [cls.show]: show }, [])}
        style={{ height: show ? heightEl : 0 }}
      >
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
