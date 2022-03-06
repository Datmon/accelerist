import axios from 'axios';

const BASE_URL = `https://accelerist.herokuapp.com/api/v1/saved-list/`;

export const getSaved = async (page: number, limit: number) => {
  const res = await axios
    .get(`${BASE_URL}?page=${page}&limit=${limit}`)
    .catch(error => error);
  return res;
};
