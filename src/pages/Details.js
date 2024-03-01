import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchFlightDetails } from '../api/api-client';

const Details = (props) => {
  const [flight, setFlight] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const flightDetails = await fetchFlightDetails(id);

      setFlight(flightDetails);
    };

    fetchData();
  }, []);

  if (!flight) return null;

  return (
    <div>
      <h1>Details {id}</h1>
    </div>
  );
};

export default Details;
