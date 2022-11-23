import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import App from './app/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>,
);
