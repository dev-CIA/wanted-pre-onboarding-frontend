import React from 'react';
import authSchema from '../schema/authSchema';

const useValidate = (email, password) => {
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

  return isValid;
};

export default useValidate;
