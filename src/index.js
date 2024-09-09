import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';
import CMS from "decap-cms-app";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
