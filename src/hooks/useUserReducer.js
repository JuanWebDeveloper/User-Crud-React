export const useUserReducer = (state, action) => {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
