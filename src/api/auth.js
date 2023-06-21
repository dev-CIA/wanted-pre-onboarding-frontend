import axios from 'axios';
import URL from '../constants/todoUrl';

const postSignUp = async data => {
  try {
    const response = await axios.post(`${URL}/auth/signup`, data);
    return response;
  } catch (error) {
    console.error('회원가입 오류', error);
    throw error;
  }
};

const postSignin = async data => {
  try {
    const response = await axios.post(`${URL}/auth/signin`, data);
    return response;
  } catch (error) {
    console.error('로그인 오류', error);
    throw error;
  }
};

export { postSignUp, postSignin };
