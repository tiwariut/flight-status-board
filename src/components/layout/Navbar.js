import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToListPage = () => {
    navigate('/');
  };

  return (
    <nav>
      <h2 onClick={navigateToListPage}>Flight Status</h2>
    </nav>
  );
};

export default Navbar;
