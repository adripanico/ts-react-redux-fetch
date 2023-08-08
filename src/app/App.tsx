import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { CharactersView } from 'components/CharactersView/CharactersView';
import store from 'store/store';

import { APP_CONSTANTS } from '../constants';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`/${APP_CONSTANTS.baseUrl}`}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Navigate to="/characters" />} />
            <Route path="/characters" element={<CharactersView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
