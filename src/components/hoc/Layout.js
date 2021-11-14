import React from "react";
import Header from "../Header";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "../../pages/Home";
import AddUser from "../../pages/AddUser";

const withLayout = (WrappedComponent) => (props) => {
  return (
    <>
      <Header />
      <Router>
        <WrappedComponent {...props} />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/user:id" exact component={InnerPage} /> */}
          <Route path="/add-user" exact component={AddUser} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default withLayout;
