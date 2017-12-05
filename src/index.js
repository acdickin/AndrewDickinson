import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

require('./styles/home.scss')
require('./styles/header.scss')
require('./styles/footer.scss')
require('./styles/resume.scss')
require('./styles/projects.scss')
require('./styles/projMenu.scss')

ReactDOM.render(
  <BrowserRouter>
  	<App />
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
