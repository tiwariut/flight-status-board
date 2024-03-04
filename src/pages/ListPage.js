import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchFlightList } from '../api/api-client';
import { formatDate } from '../utils/helper';
import { flightStatus } from '../utils/constants';
import config from '../config/config';

const { fetchDataIntervalDuration } = config;

import Loader from '../components/common/Loader';
import List from '../components/list/List';

const ListPage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let flightList = await fetchFlightList();

      // Format data
      flightList = flightList.map((flight) => {
        return {
          ...flight,
          departureTime: formatDate(flight.departureTime),
          className: flightStatus[flight.status]
        };
      });

      setFlights(flightList);
      setIsLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, fetchDataIntervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  const navigateToDetailsPage = (id) => {
    navigate(`/details/${id}`);
  };

  if (isLoading) return <Loader />;

  if (!flights.length) return null;

  return (
    <div>
      {<List items={flights} handleListItemClick={navigateToDetailsPage} />}
    </div>
  );
};

export default ListPage;
