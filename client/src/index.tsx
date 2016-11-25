import 'babel-polyfill';

import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

import routes from './store/routes';
import configureStore from './store/configure-store';

import './index.css';
import IntlManager from './IntlManager';

declare const __TEST__: boolean;

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  IntlManager.loadModuleIntlStrings('.', 'zh-cn', 'builder-common').then(messages => {
    ReactDOM.render(
      <div>
        <Provider store={ store }>
          <IntlProvider locale="en" messages={messages}>
            <Router history={ history }>
              { routes }
            </Router>
          </IntlProvider>
        </Provider>
      </div>,
      document.getElementById('root')
    );
  });  
}
