import {
  MouseEvent, Suspense, useEffect, useState,
} from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('App', {}, [theme])}>
      <Navbar />
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}