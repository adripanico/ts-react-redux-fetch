import store from './store/store';
import { Provider } from 'react-redux';
import { RickAndMorty } from './components/RickAndMorty/RickAndMorty';

const App = () => {
  return (
    <Provider store={store}>
      <RickAndMorty />
    </Provider>
  );
};

export default App;
