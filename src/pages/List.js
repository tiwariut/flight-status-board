import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchFlightList } from '../api/api-client';

const List = () => {
  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const flightList = await fetchFlightList();

      setFlights(flightList);
    };

    fetchData();
  }, []);

  const navigateToDetailsPage = (id) => {
    navigate(`/details/${id}`);
  };

  if (!flights.length) return null;

  return (
    <div>
      <h1>List</h1>
      <button onClick={() => navigateToDetailsPage(1)}>Go to details</button>
    </div>
  );
};

export default List;
