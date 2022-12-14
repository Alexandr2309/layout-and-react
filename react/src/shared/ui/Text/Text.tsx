import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export interface TextProps {
  className?: string
  theme?: TextTheme;
  title?:string;
  text?: string;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.PRIMARY,
    text,
    title,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
