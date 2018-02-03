import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

const cheeses = ['Bath Blue', 'Barkham Blue', 'Buxton Blue'];

ReactDOM.render(
  <Provider store={store}>
    <CheeseList cheeses={cheeses}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
