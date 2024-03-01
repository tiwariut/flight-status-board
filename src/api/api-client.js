import axios from 'axios';

import config from '../config/config';

const { baseAPIUrl } = config;

const fetchFlightList = async () => {
  try {
    const response = await axios(`${baseAPIUrl}/flights`);
    return response.data;
  } catch (err) {
    console.error('Error in fetching flight list.', err);
  }
};

const fetchFlightDetails = async (id) => {
  try {
    const response = await axios(`${baseAPIUrl}/flights/${id}`);
    return response.data;
  } catch (err) {
    console.error('Error in fetching flight details.', err);
  }
};

export { fetchFlightList, fetchFlightDetails };
