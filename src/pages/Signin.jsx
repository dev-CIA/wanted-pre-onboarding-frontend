import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton, AuthMessage } from '../components';
import useValidate from '../hooks/useValidate';
import { postSignin } from '../api/auth';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isValid = useValidate(email, password);
  const navigate = useNavigate();

  const submitSignin = async () => {
    const response = await postSignin({
      email,
      password,
    });
    if (response.status === 200 || response.status === 201) {
      navigate('/todo');
    }
  };

  return (
    <Container>
      <AutoFormTitle>로그인</AutoFormTitle>
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
        <SubmitButton data-testid="signin-button" disabled={!isValid} onClick={submitSignin}>
          로그인
        </SubmitButton>
        <AuthMessage>
          회원이 아니신가요? <Link to={'/signup'}>회원가입 하러 가기</Link>
        </AuthMessage>
      </AuthFormContainer>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  margin: 2em auto;
`;
