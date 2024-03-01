import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { fetchFlightDetails } from '../api/api-client';
import config from '../config/config';

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

  return (
    <div>
      <h3>
        {flight.airline}: {flight.flightNumber}
      </h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default DetailsPage;
