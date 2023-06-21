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

const createTodo = async newData => {
  try {
    const response = await axios.post(`${URL}/todos`, { todo: newData }, todosConfig);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await axios.put(`${URL}/todos/${id}`, { todo, isCompleted }, todosConfig);
    console.log('re', response);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const deleteTodo = async id => {
  try {
    await axios.delete(`${URL}/todos/${id}`, todosConfig);
  } catch (e) {
    console.error(e);
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
