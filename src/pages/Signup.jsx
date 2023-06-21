import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton } from '../components';
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
      </AuthFormContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  margin: 2em auto;
`;
