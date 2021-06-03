/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

// Import your own reducer
import configureStore from '../redux/store';

function render(
  component,
  {
    initialState,
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
