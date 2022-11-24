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
  theme: StripeColor
  text?: string
}

export const Stripe = memo((props: StripeProps) => {
  const {
    className, top, width, left, text, theme = StripeColor.BLUE,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width,
    top,
    left,
  }), []);

  return (
    <div
      style={styles}
      className={classNames(cls.StripeWrapper, {}, [className])}
    >
      <div className={cls.Stripe} />
      <span className={cls.text}>{text}</span>
    </div>
  );
});
