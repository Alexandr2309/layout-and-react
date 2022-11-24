import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchTasksData } from 'entities/Tasks/model/services/fetchTasksData/fetchTasksData';
import { Chart } from 'widgets/Chart';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksData());
  }, []);

  return (
    <div className={classNames('App', {}, [])}>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Chart />
      </Suspense>
    </div>
  );
}
