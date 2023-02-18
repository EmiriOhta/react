import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
export {default as Home} from './components/Home'
export {default as About} from './components/About'
export {default as Contact} from './components/Contact'
export {default as Profile} from './components/Profile'
export {default as Skills} from './components/Skills'
export {default as Header} from './components/Header'
export {default as Footer} from './components/Footer'
export {default as Title} from './components/Title'
export {default as Article} from './components/Article'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

