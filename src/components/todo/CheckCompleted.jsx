import React from 'react';
import { updateTodo } from '../../api';

const CheckCompleted = ({ id, todo, isCompleted }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    setIsChecked(isCompleted);
  }, []);

  const toggleTodo = async ({ id, todo, isCompleted }) => {
    await updateTodo({ id, todo, isCompleted: !isCompleted });
    setIsChecked(!isCompleted);
  };

  return <input type="checkbox" checked={isChecked} onChange={() => toggleTodo({ id, todo, isCompleted })} />;
};

export default CheckCompleted;
