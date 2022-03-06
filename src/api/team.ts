import axios from 'axios';

const BASE_URL = `https://accelerist.herokuapp.com/api/v1/team/`;

export const getTeam = async () => {
  const res = await axios.get(`${BASE_URL}`).catch(error => error);
  return res;
};
