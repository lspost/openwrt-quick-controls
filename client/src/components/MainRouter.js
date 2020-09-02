import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import GroupEdit from './GroupEdit';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <div className="grey lighten-2" style={{ minHeight: '100vh' }}>
        <Header />
        <div className="container">
          <Route exact path="/" component={Dashboard} />
          <Route path="/group/edit" component={GroupEdit} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
