import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store.js';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);