import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/Home/Home';

test('HeroContainer test', async () => {
  const home = render(
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;600;700&family=Inter:wght@300;400;600&family=Lato:wght@300;400;700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,700&display=swap" rel="stylesheet" />
        </Helmet>
      </HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </>,
  );
  expect(home).toMatchSnapshot();
});
