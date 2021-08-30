import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/home/header';
import HeroSection from './components/home/heroSection';
import Footer from './components/home/footer';

import Stock from './components/stock/view';
import StockCreate from './components/stock/create';
import StockEdit from './components/stock/edit';

import Store from './components/store/view';
import StoreCreate from './components/store/create';
import StoreEdit from './components/store/edit';

import StoreItems from './components/storeItems/view';
import StoreItemsCreate from './components/storeItems/create';
import StoreItemsEdit from './components/storeItems/edit';

function App() {
  return (
    <div>
       <Router>
              <Header />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HeroSection}></Route>

                          <Route path = "/stock" component = {Stock}></Route>
                          <Route path = "/add-stock" component = {StockCreate}></Route>
                          <Route path = "/edit-stock" component = {StockEdit}></Route>

                          <Route path = "/store" component = {Store}></Route>
                          <Route path = "/add-store" component = {StoreCreate}></Route>
                          <Route path = "/edit-store" component = {StoreEdit}></Route>

                          <Route path = "/store_items" component = {StoreItems}></Route>
                          <Route path = "/add-store_items" component = {StoreItemsCreate}></Route>
                          <Route path = "/edit-store_items" component = {StoreItemsEdit}></Route>
                          
                    </Switch>
                </div>
              <Footer />
        </Router>
    </div>
  );
}

export default App;
