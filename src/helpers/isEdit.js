export const isEdit = (id, username, description, dispatch) => {
  const action = {
    type: 'isEdit',
    payload: {
      id,
      username,
      description,
    },
  };

  dispatch(action);
};
