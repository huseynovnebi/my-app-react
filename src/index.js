import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
import About from './components/About'
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navigate } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    
     <App/>
    </Provider>
  </React.StrictMode>,
)