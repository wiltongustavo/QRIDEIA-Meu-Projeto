import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import  './Normalize.css';
import Nav from './Nav';


import'./Login.css'

ReactDOM.render(
  <React.StrictMode>
    <Nav/>,
    <Header/>,
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
  
);

