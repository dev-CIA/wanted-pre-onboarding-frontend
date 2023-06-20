import React from 'react';
import styled from 'styled-components';
import authSchema from '../schema/authSchema';

const Signin = () => {
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
    }
  }, [email, password]);

  return (
    <Container>
      <Title>로그인</Title>
      <Form>
        <Label>
          이메일
          <Input
            data-testid="email-input"
            type="text"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </Label>
        <Label>
          비밀번호
          <Input
            data-testid="password-input"
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </Label>
        <Button data-testid="signin-button" disabled={!isValid}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  margin: 2em auto;
`;

const Title = styled.div`
  margin: 0.5em;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 20em;
  border: 1px solid black;
  padding: 2em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 2em;
`;

const Button = styled.button`
  height: 2.5em;
  font-weight: 500;
`;
