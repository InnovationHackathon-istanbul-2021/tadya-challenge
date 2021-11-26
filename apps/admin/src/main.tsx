import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import './style.css'
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
