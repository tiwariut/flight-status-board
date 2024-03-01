import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchFlightList } from '../api/api-client';
import { formatDate } from '../utils/helper';

import List from '../components/list/List';

const ListPage = () => {
  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let flightList = await fetchFlightList();

      // Format date before saving
      flightList = flightList.map((flight) => {
        return {
          ...flight,
          departureTime: formatDate(flight.departureTime)
        };
      });

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
      <h1>List Page</h1>
      {<List items={flights} handleListItemClick={navigateToDetailsPage} />}
    </div>
  );
};

export default ListPage;
