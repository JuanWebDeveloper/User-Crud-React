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
    default:
      return state;
  }
};
