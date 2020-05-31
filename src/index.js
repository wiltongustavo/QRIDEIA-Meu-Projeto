import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import  './Normalize.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
  
);


 