/* eslint-disable no-unused-vars */
import React from 'react';
import Authors from '../../constants/Authors';

function List() {
  return (
    <div className="List">
      <ul>
        {
          Authors.map((author) => (
            <li>
              <img src="{author.authorImg}" alt="authors" />
              <span>{author.author}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default List;
