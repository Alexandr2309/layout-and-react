import React, {
  CSSProperties,
  HTMLProps, memo, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ChevronDown from 'shared/assets/icons/chevron_down.svg';
import cls from './Accordion.module.scss';

export interface IAccordionProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  task?: ReactNode;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
  dataAtrs?: Record<string, string>;
  cb?: (...params: any[]) => void | any
}

const Accordion = memo(({
  children,
  className,
  task,
  style,
  contentStyle,
  dataAtrs,
  cb,
}: IAccordionProps) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    cb?.(show);
  }, [show]);

  const setIsShow = useCallback(() => {
    setShow((s) => !s);
  }, []);

  const modsToggler = {
    [cls.show]: show,
    [cls.visible]: false,
  };

  return (
    <div
      {...dataAtrs}
      className={classNames(cls.Accordion, {}, [])}
    >
      <div className={cls.wrapper}>
        <div
          style={style}
          className={classNames(cls.view, {}, [className])}
        >
          <Button
            onClick={setIsShow}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.toggler, modsToggler, [])}
          >
            <ChevronDown />
          </Button>
          {task}
        </div>
        {show && (
          <div
            style={contentStyle}
            className={cls.content}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
});

export default Accordion;
