import axios from 'axios';
import URL from '../constants/todoUrl';

const getTodos = async () => {
  const { data } = await axios.get(`${URL}/todos`);
  return data;
};

export default getTodos;
