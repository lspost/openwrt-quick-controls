import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <div className="grey lighten-2" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="container">
          <Route exact path="/" component={Dashboard} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
