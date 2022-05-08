import { hideModalEditUser } from './modals';

export const editUser = (e, id, username, description, dispatch) => {
  e.preventDefault();

  const action = {
    type: 'editUser',
    payload: {
      id,
      username,
      description,
    },
  };

  dispatch(action);
  hideModalEditUser(dispatch);
};
