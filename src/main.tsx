import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { initializeModernAnimations } from './utils/modernAnimations';

// Production environment check
if (process.env.NODE_ENV === 'production') {
  // Disable React DevTools in production
  if (typeof window !== 'undefined') {
    (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
      isDisabled: true,
      supportsFiber: true,
      inject: () => {},
      onCommitFiberRoot: () => {},
      onCommitFiberUnmount: () => {},
    };
  }
}

// Initialize modern animations
document.addEventListener('DOMContentLoaded', () => {
  initializeModernAnimations();
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>
);
