import { v4 as uuidv4 } from 'uuid';
import { hideModalCreateUser } from './modals';

export const addUser = (e, username, description, dispatch, resetForm) => {
  e.preventDefault();

  const newTodo = {
    id: uuidv4(),
    username,
    description,
  };

  const action = {
    type: 'addUser',
    payload: newTodo,
  };

  dispatch(action);
  hideModalCreateUser(resetForm);
};
