import axios from 'axios';

import config from '../config/config';

const { baseAPIUrl } = config;

const fetchFlightList = async () => {
  try {
    const response = await axios(`${baseAPIUrl}/flights`);
    return { data: response.data };
  } catch (err) {
    console.error('Error in fetching flight list.', err);
    return {
      errorMessage: err.response.data.error || 'Error in fetching data.'
    };
  }
};

const fetchFlightDetails = async (id) => {
  try {
    const response = await axios(`${baseAPIUrl}/flights/${id}`);
    return { data: response.data };
  } catch (err) {
    console.error('Error in fetching flight details.', err);
    return {
      errorMessage: err.response.data.error || 'Error in fetching data.'
    };
  }
};

export { fetchFlightList, fetchFlightDetails };
