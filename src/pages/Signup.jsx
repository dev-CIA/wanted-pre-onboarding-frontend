import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import authSchema from '../schema/authSchema';
import { AutoFormTitle, AuthFormContainer, FormLabel, FormInput, SubmitButton } from '../components';
import postSignUp from '../api/auth';

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  const navigate = useNavigate();

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
