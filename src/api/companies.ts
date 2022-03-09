import axios from 'axios';

const BASE_URL = `https://accelerist.herokuapp.com/api/v1/companies/`;

export const getSuggested = async (page: number, limit: number) => {
  const res = await axios
    .get(`${BASE_URL}suggested/?page=${page}&limit=${limit}`)
    .catch(error => error);
  return res;
};

export const getFavorites = async (page: number, limit: number) => {
  const res = await axios
    .get(`${BASE_URL}favorites/?page=${page}&limit=${limit}`)
    .catch(error => error);
  return res;
};

export const getCompanies = async (page: number, limit: number) => {
  const res = await axios
    .get(`${BASE_URL}?page=${page}&limit=${limit}`)
    .catch(error => error);
  return res;
};

export const getCompany = async (id: string) => {
  const res = await axios.get(`${BASE_URL}${id}`).catch(error => error);
  return res;
};
