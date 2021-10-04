import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400&display=swap');

  body {
    font-family: 'Exo 2', sans-serif;
    background-color: #722F37;
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Global styles={globalStyles} />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

