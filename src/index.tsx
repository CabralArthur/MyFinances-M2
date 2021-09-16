import React from 'react';
import ReactDOM from 'react-dom';
import { Server } from 'miragejs';
import { App } from './App';

new Server({
  routes() {
    this.namespace = '/api';

    this.get('/transactions', () =>{
      return [{
        id: 1,
        title: 'Transaction 1',
        amount: 400,
        type: 'deposit',
        category: 'Food'
      }]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
