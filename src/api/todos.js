import axios from 'axios';
import URL from '../constants/todoUrl';

const accessToken = localStorage.getItem('accessToken') ?? '';

const getTodos = async () => {
  const { data } = await axios.get(`${URL}/todos`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default getTodos;
