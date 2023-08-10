import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import store from 'store/store';

import { router } from './router';

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
};

export default App;
