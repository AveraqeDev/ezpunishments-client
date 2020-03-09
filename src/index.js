import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import './index.css';
import App from './components/App/App';

import { 
  faGavel // logo
 } from '@fortawesome/free-solid-svg-icons';

library.add(
  faGavel
)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));
