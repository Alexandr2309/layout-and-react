import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Accordion.module.scss';

export interface IAccordionProps {
  title: string;
  img?: string;
  children: React.ReactNode | React.ReactElement;
  className?: string;
}

const Accordion: FC<IAccordionProps> = ({
  children,
  title,
  img,
  className,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [heightEl, setHeightEl] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && setHeightEl(ref.current.scrollHeight);
  }, []);

  const setIsShow = (e: React.MouseEvent<HTMLDivElement>) => {
    setShow((s) => !s);
  };

  return (
    <div className={classNames(cls.Accordion, {}, [className])} />
  );
};

export default Accordion;
