import React from 'react';

const Signin = () => {
  console.log();
  return (
    <>
      <form>
        <label>
          이메일
          <input data-testid="email-input" type="text" />
        </label>
        <label>
          비밀번호
          <input data-testid="password-input" type="password" />
        </label>
        <button data-testid="signin-button">로그인</button>
      </form>
    </>
  );
};

export default Signin;
