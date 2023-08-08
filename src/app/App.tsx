import { Provider } from 'react-redux';

import { RickAndMorty } from 'components/RickAndMorty/RickAndMorty';
import store from 'store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RickAndMorty />
    </Provider>
  );
};

export default App;
