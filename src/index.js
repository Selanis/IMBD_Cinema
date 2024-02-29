import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Data from './components/Data';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme')
  if (theme == null) {
    localStorage.setItem('theme', 'light')
  }
  
})

root.render(
  <React.StrictMode>
    <Header />
    <Data />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
