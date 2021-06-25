import React from "react";
import { Redirect, Route } from "react-router-dom";
const ProtectedRoute = ({ children, ...allOtherProps }) => {

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  
  if (isAuthenticated) {
    return <Route {...allOtherProps}>{children}</Route>;
  }
  return <Route {...allOtherProps} render={() => <Redirect to="/" />} />;
};

export default ProtectedRoute;
