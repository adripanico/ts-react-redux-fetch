import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { CharacterDetailsView } from 'components/CharacterDetailsView/CharacterDetailsView';
import { CharactersView } from 'components/CharactersView/CharactersView';
import { NotFound } from 'components/NotFound/NotFound';
import store from 'store/store';

import { APP_CONSTANTS } from '../constants';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`/${APP_CONSTANTS.baseUrl}`}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route path="/characters" element={<CharactersView />} />
            <Route path="/characters/:id" element={<CharacterDetailsView />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
