import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { SidebarNavigation } from './app/components/sidebar/navigation';

import AppRouter from './app/router/router';
import './style.css'
const routes = [
  {
    path: '/app/dashboard',
    icon: 'HiOutlineHome',
    name: 'Dashboard',
    exact: true,
  },
  {
    path: '/app/forms',
    icon: 'HiOutlineNewspaper',
    name: 'Forms',
  },
  {
    path: '/app/charts',
    icon: 'HiOutlineChartPie',
    name: 'Charts',
  },
];


ReactDOM.render(
  <StrictMode>
     <Router>
     <SidebarNavigation/>

      <div className="ml-72 mr-8 h-screen ">
        <AppRouter />
      </div>
     </Router>

  </StrictMode>,
  document.getElementById('root')
);
