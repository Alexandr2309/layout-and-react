import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { IIconBlock } from '../model/types/icon';

export interface IconProps {
  className?: string;
  icon: IIconBlock;
  count?: number;
  label?: string
}

export const Icon = (props: IconProps) => {
  const {
    className, icon, label, count,
  } = props;

  return (
    <div className={classNames(cls.Icon, {}, [className])}>
      <div
        className={classNames(cls.iconWrapper, {}, [icon.className])}
      >
        <icon.Item />
      </div>
      {count && <span className={cls.count}>{count}</span>}
      {label && <span className={cls.label}>{label}</span>}
    </div>
  );
};
