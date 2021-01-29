import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'
import "./styles/styles.scss"
import { getAllTeachers } from './Redux/actionCreators';
import App from './Components/App';

store.dispatch(getAllTeachers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

