import React from 'react';
import styled from 'styled-components';
import authSchema from '../schema/authSchema';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton } from '../components';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  React.useEffect(() => {
    authSchema.email.value = email;
    authSchema.password.value = password;

    const isValidEmail = authSchema.email.valid;
    const isValidPassword = authSchema.password.valid;

    if (isValidEmail && isValidPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

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
        <SubmitButton data-testid="signup-button" disabled={!isValid}>
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
