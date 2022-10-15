import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyles.styled';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;600;700&family=Inter:wght@300;400;600&family=Lato:wght@300;400;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&display=swap" rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
