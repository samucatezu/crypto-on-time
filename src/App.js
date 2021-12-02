import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Exchanges, Footer, Home, Markets, Navbar, News, AllCryptos, CryptoDetails } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/exchanges">
          <Exchanges />
        </Route>
        <Route exact path="/cryptos">
          <AllCryptos />
        </Route>
        <Route exact path="/crypto/:coinId">
          <CryptoDetails />
        </Route>
        <Route exact path="/cryptos">
          <AllCryptos />
        </Route>
        <Route exact path="/markets">
          <Markets />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </routes>
      <Footer />
    </div>
  </div>
);

export default App;
