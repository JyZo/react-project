import React from 'react';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h1>
        <a href="http://localhost:3000/">
          <img src="/img/homelogo.png" alt=""></img>
        </a>
      </h1>
    </div>
  );
};

export default Header;
