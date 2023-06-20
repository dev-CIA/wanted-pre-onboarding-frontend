import React from 'react';
import styled from 'styled-components';
import authSchema from '../schema/authSchema';

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
    }
  }, [email, password]);

  return (
    <Container>
      <Title>회원가입</Title>
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
        <Button data-testid="signup-button" disabled={!isValid}>
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  margin: 2em auto;
`;

const Title = styled.div`
  margin: 0.5em;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
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
