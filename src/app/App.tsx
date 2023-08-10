import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { ThemeContextProvider } from 'context/ThemeContext';
import store from 'store/store';

import { router } from './router';

const App = () => {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <Header />
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </ThemeContextProvider>
  );
};

export default App;
