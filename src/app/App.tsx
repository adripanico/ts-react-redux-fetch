import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import store from 'store/store';

const Characters = lazy(() => import('components/Characters/Characters'));
const CharacterDetails = lazy(() => import('components/CharacterDetails/CharacterDetails'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="/" element={<Navigate to="/characters" replace />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetails />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/not-found" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
};

export default App;
