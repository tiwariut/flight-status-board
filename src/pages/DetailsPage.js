import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchFlightDetails } from '../api/api-client';
import { formatDate } from '../utils/helper';
import config from '../config/config';
import { flightStatus } from '../utils/constants';

import '../styles/details-page.css';

const { fetchDataIntervalDuration } = config;

const DetailsPage = () => {
  const [flight, setFlight] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const flightDetails = await fetchFlightDetails(id);

      setFlight(flightDetails);
    };

    fetchData();

    const intervalId = setInterval(fetchData, fetchDataIntervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  if (!flight) return null;

  const { airline, departureTime, destination, flightNumber, origin, status } =
    flight;

  return (
    <div>
      <div className='header-container'>
        <div>{airline}</div>
        <div className='flight-number'>{flightNumber}</div>
        <div className={`status-text ${flightStatus[status]}`}>{status}</div>
      </div>
      <div className='details-container'>
        <div>
          <strong>Departure Time:</strong> {formatDate(departureTime)}
        </div>
        <div>
          <strong>Origin:</strong> {origin}
        </div>
        <div>
          <strong>Destination:</strong> {destination}
        </div>

        <button className='back-button' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
