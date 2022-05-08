export const useUserReducer = (state, action) => {
  switch (action.type) {
    case 'addUser':
      return [...state, action.payload];
    default:
      return state;
  }
};
