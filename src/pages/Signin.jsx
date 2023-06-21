import React from 'react';
import styled from 'styled-components';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton } from '../components';
import useValidate from '../hooks/useValidate';

const Signin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isValid = useValidate(email, password);

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
        <SubmitButton data-testid="signin-button" disabled={!isValid}>
          로그인
        </SubmitButton>
      </AuthFormContainer>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  margin: 2em auto;
`;
