import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToListPage = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={navigateToListPage}>Go to list</button>
    </div>
  );
};

export default Navbar;
