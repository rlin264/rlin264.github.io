import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer'
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <div>
    <HashRouter>
      <Navbar/>
      <App/>
      <Footer/>
    </HashRouter>
  </div>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
