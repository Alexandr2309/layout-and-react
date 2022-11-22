/**
 * Created by Саня on 29.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError = ({ className }: IPageErrorProps) => {
  const onReloadPage = () => window.location.reload();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>Произошла непредвиденная ошибка</h1>
      <Button onClick={onReloadPage}>
        Перезагрузить страницу
      </Button>
    </div>
  );
};
