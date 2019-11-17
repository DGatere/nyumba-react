import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './containers/App';

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.register();
