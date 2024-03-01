import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToListPage = () => {
    navigate('/');
  };

  return (
    <nav>
      <h2 onClick={navigateToListPage}>FLIGHT STATUS</h2>
    </nav>
  );
};

export default Navbar;
