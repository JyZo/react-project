import React from 'react';
import { useLocation } from 'react-router';
import './Header.css';

const Header = () => {
  //   const location = useLocation();

  //   console.log(location);

  return (
    <header className="header">
      <h1>
        <a href="http://localhost:3000/">
          <img src="/img/homelogo.png" alt=""></img>
        </a>
      </h1>
    </header>
  );
};

export default Header;
