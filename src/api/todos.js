import axios from 'axios';
import URL from '../constants/todoUrl';

const accessToken = localStorage.getItem('accessToken');

const todosConfig = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

const getTodos = async () => {
  try {
    const response = await axios.get(`${URL}/todos`, todosConfig);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default getTodos;
