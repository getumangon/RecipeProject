import React from 'react';
import { Provider } from 'react-redux'
import RecipeApp from './app/appMain';
import { store } from './store';

function App(props) {
  return (
    <Provider store={store}>
      <RecipeApp />
    </Provider>
  );
}

export default App;
