import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
        <style jsx> {`
            div {
              background-color: lightyellow;
              padding: 10px;
            }

              `}
        </style>
      <h1>Header works</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="admin">Admin</Link></li>
      </ul>
    </div>
  );
}

export default Header;
