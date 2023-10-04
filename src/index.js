import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Head } from './head';
import { Body } from './body/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Head />
    <Body />
  </div>


);

