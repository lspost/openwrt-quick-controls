import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './pages/Dashboard';
import GroupEdit from './pages/GroupEdit';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <div className="grey lighten-2 main-router">
        <Header />
        <div className="container">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/group/edit" component={GroupEdit} />
          <Route path="/group/edit/:id" component={GroupEdit} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
