import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from 'app/App.tsx';

import 'styles/index.scss';
import 'i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
