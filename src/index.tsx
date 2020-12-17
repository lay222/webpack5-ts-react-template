import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import getRoute from '@/router/router.tsx';
import App from './App.tsx';

ReactDOM.render(
  getRoute(),
  document.getElementById('root'),
);
