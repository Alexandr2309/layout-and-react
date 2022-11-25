import React, { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { IIconBlock } from '../model/types/icon';

export interface IconProps {
  className?: string;
  icon: IIconBlock;
  count?: number | string;
  label?: string;
  dataAtrs?: Record<string, string>
  styles?: CSSProperties
}

export const Icon = (props: IconProps) => {
  const {
    className, icon, label, count, styles, dataAtrs,
  } = props;

  return (
    <div
      style={styles}
      className={classNames(cls.Icon, {}, [className])}
      {...dataAtrs}
    >
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
