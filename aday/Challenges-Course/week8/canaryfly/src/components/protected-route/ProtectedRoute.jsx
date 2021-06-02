/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SubmitComponent } from '../submit/Submit';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('this', isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) => (isAuthenticated ? <SubmitComponent {...props} /> : <Redirect to="/" />)}
    />
  );
}

export default ProtectedRoute;
