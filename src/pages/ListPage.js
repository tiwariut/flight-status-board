import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchFlightList } from '../api/api-client';
import { formatDate } from '../utils/helper';
import { flightStatus } from '../utils/constants';
import config from '../config/config';

const { fetchDataIntervalDuration, errorMessageDuration } = config;

import Loader from '../components/common/Loader';
import Toast from '../components/common/Toast';
import List from '../components/list/List';

const ListPage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let flightListData = await fetchFlightList();

      if (flightListData.errorMessage) {
        setErrorMessage(flightListData.errorMessage);
        // Clear error after sometime
        setTimeout(() => setErrorMessage(''), errorMessageDuration);
      } else {
        // Format data
        const formattedFlightList = flightListData.data.map((flight) => {
          return {
            ...flight,
            departureTime: formatDate(flight.departureTime),
            className: flightStatus[flight.status]
          };
        });

        setFlights(formattedFlightList);
      }

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

  return (
    <div>
      {errorMessage && <Toast message={errorMessage}></Toast>}
      {flights.length > 0 && (
        <List items={flights} handleListItemClick={navigateToDetailsPage} />
      )}
    </div>
  );
};

export default ListPage;
