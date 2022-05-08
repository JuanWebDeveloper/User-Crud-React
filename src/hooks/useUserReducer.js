export const useUserReducer = (state, action) => {
  switch (action.type) {
    case 'addUser':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'isEdit':
      return {
        ...state,
        isEdit: action.payload,
      };
    case 'cancelEdit':
      return {
        ...state,
        isEdit: false,
      };
    case 'editUser':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        }),
      };
    case 'deleteUser':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
