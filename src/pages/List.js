import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();

  const navigateToDetailsPage = () => {
    navigate('/details/1');
  };

  return (
    <div>
      <h1>List</h1>
      <button onClick={navigateToDetailsPage}>Go to details</button>
    </div>
  );
};

export default List;
