/**
 * Created by Саня on 26.09.2022
 */
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getTasksPeriod, getTasksTitle } from 'entities/Tasks/model/selectors/tasksSelector';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import ArrowDownload from 'shared/assets/icons/arrow_download.svg';
import cls from './Navbar.module.scss';

type INavbarProps = {
  className?: string;
};

export const Navbar = ({ className }: INavbarProps) => {
  const title = useSelector(getTasksTitle);
  const period = useSelector(getTasksPeriod);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Text
        title={`${title} / ${period}`}
        className={cls.title}
      />
      <Button
        theme={ThemeButton.OUTLINED}
        className={cls.button}
      >
        <ArrowDownload />
        Export
      </Button>
    </div>
  );
};
