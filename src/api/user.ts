import axios from 'axios';

const BASE_URL = `https://accelerist.herokuapp.com/api/v1/user`;

export const getUser = async () => {
  const res = await axios.get(`${BASE_URL}`).catch(error => error);
  return res;
};
