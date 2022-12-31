import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import GlobalTheme from './components/GlobalTheme';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <GlobalTheme />
  </React.StrictMode>,
  document.getElementById('root')
);
