import axios from 'axios';
import URL from '../constants/todoUrl';

const getTodos = async () => {
  try {
    const response = await axios.get(`${URL}/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const createTodo = async newData => {
  try {
    const response = await axios.post(
      `${URL}/todos`,
      { todo: newData },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const response = await axios.put(
      `${URL}/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    console.log('re', response);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const deleteTodo = async id => {
  try {
    await axios.delete(`${URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
