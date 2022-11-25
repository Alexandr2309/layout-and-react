import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Stripe.module.scss';

export enum StripeColor {
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export interface StripeProps {
  className?: string;
  width: number;
  top: number;
  left: number;
  visibility: string;
  theme: StripeColor
  text?: string
}

export const Stripe = (props: StripeProps) => {
  const {
    className, top, width, left, text, visibility, theme = StripeColor.BLUE,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    top,
    left,
    // @ts-ignore
    visibility,
  }), [top, left, visibility]);

  return (
    <div
      style={styles}
      className={classNames(cls.StripeWrapper, {}, [className])}
    >
      <div className={`${cls.Stripe} ${cls[theme]}`} style={{ width }} />
      <span className={cls.text}>{text}</span>
    </div>
  );
};
