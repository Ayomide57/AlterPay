import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './containers/order';
import OrderDetail from './screens/orders/OrderDetail';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './services/redux/store';
import { persistor } from './services/redux/store';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Fragment>
            <Routes>
              <Route path="/" element={<Order />} />
              <Route path="/order-detail/:id" element={<OrderDetail />} />
            </Routes>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
}


export default App;
