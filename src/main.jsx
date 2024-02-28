import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Data from './Components/DataComponent'
import AppClass from "./AppClass";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass Data = {Data}/>   
  </React.StrictMode>
);