import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton, AuthMessage } from '../components';
import { postSignUp } from '../api';
import useValidate from '../hooks/useValidate';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isValid = useValidate(email, password);
  const navigate = useNavigate();

  const submitSignup = async () => {
    const response = await postSignUp({
      email,
      password,
    });
    if (response.status === 200 || response.status === 201) {
      navigate('/signin');
    }
  };

  return (
    <Container>
      <AutoFormTitle>회원가입</AutoFormTitle>
      <AuthFormContainer>
        <FormLabel>
          이메일
          <FormInput
            data-testid="email-input"
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </FormLabel>
        <FormLabel>
          비밀번호
          <FormInput
            data-testid="password-input"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </FormLabel>
        <SubmitButton data-testid="signup-button" disabled={!isValid} onClick={submitSignup}>
          회원가입
        </SubmitButton>
        <AuthMessage>
          회원이신가요? <Link to={'/signin'}>로그인 하러 가기</Link>
        </AuthMessage>
      </AuthFormContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  margin: 2em auto;
`;
