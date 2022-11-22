import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <ThemeContextProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ThemeContextProvider>,
);
