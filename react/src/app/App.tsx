import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { PageLoader } from 'widgets/PageLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTasksData } from 'entities/Tasks/model/services/fetchTasksData/fetchTasksData';
import { getNormalizeTasks } from 'entities/Tasks/lib';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksData());
  }, []);

  return (
    <div className={classNames('App', {}, [])}>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <MainPage />
      </Suspense>
    </div>
  );
}
