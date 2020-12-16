import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import App from './App.tsx';
import getRoute from './router/router.tsx';

ReactDOM.render(
  getRoute(),
  document.getElementById('root'),
);
