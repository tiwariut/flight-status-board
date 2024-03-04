import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchFlightDetails } from '../api/api-client';
import { formatDate } from '../utils/helper';
import config from '../config/config';
import { flightStatus } from '../utils/constants';

import Loader from '../components/common/Loader';
import Toast from '../components/common/Toast';

import '../styles/details-page.css';

const { fetchDataIntervalDuration, errorMessageDuration } = config;

const DetailsPage = () => {
  const [flight, setFlight] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const flightDetailsData = await fetchFlightDetails(id);
      if (flightDetailsData.errorMessage) {
        setErrorMessage(flightDetailsData.errorMessage);
        // Clear error after sometime
        setTimeout(() => setErrorMessage(''), errorMessageDuration);
      } else {
        setFlight(flightDetailsData.data);
      }

      setIsLoading(false);
    };

    fetchData();

    const intervalId = setInterval(fetchData, fetchDataIntervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      {errorMessage && <Toast message={errorMessage}></Toast>}
      {flight && (
        <div>
          <div className='header-container'>
            <div>{flight.airline}</div>
            <div className='flight-number'>{flight.flightNumber}</div>
            <div className={`status-text ${flightStatus[flight.status]}`}>
              {flight.status}
            </div>
          </div>
          <div className='details-container'>
            <div>
              <strong>Departure Time:</strong>{' '}
              {formatDate(flight.departureTime)}
            </div>
            <div>
              <strong>Origin:</strong> {flight.origin}
            </div>
            <div>
              <strong>Destination:</strong> {flight.destination}
            </div>

            <button className='back-button' onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
