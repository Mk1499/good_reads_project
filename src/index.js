import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppModals from './components/Modals/AppModals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <AppModals />,  document.getElementById('app')
  );


serviceWorker.unregister();
