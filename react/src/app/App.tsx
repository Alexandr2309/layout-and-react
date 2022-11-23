import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { PageLoader } from 'widgets/PageLoader';

export default function App() {
  const f = '';

  return (
    <div className={classNames('App', {}, [])}>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <MainPage />
      </Suspense>
    </div>
  );
}
