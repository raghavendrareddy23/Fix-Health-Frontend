// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter or HashRouter
import "./index.css"

import App from './App'; // Assuming App is your main component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
