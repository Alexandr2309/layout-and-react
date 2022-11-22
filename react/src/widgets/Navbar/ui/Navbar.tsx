/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

type INavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: INavbarProps) => {
  const f = '';

  return (
    <div className={classNames(cls.Navbar, {}, [className])} />
  );
};
