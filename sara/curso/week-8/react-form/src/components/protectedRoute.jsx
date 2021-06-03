/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (add condition) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/',
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />

);
