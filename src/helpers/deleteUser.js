export const deleteUser = (id, dispatch) => {
  const action = {
    type: 'deleteUser',
    payload: id,
  };

  dispatch(action);
};
