import React from 'react';

function Square({ value, onClick }) {
  return (
    <button type="button" onClick={onClick}>{ value }</button>
  );
}
export default Square;
