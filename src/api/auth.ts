import axios from 'axios';

const BASE_URL = `https://accelerist.herokuapp.com/api/v1/auth/`;

export const signIn = async (email: string, password: string) => {
  const res = await axios.post(`${BASE_URL}sign_in`, { email, password });
  return res;
};

export const signUp = async (email: string, password: string) => {
  const res = await axios
    .post(`${BASE_URL}sign_up`, {
      email,
      password,
    })
    .catch(error => error);
  return res;
};

export const resetPassword = async (
  userId: string,
  userData: { email: string; password: string },
) => {
  const res = await axios.post(`${BASE_URL}///////`, {
    userId,
    userData,
  });
  return res;
};
