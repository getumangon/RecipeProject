import React from 'react';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Routes from './routes/index';
import Loading from './components/UI/Loading';

function App(props) {
  const { store, persistor } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <Router>
              <Stack key="root">{Routes}</Stack>
            </Router>
        </PersistGate>
      </Provider>
  );
}

export default App;
