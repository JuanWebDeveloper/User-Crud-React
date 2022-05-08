import { useEffect, useReducer } from 'react';

// Containers
import AddUsers from './AddUsers';
import Modals from './Modals';
import UserList from './UserList';

// Custom Hooks
import { useUserReducer } from '../hooks/useUserReducer';

// Context
import { UserContext } from '../context/userContext';

// Helpers
import { init } from '../helpers/init';

const Main = () => {
  const initialState = {
    users: init(),
    isEdit: false,
  };

  const [state, dispatch] = useReducer(useUserReducer, initialState);

  // Save users to LocalStorage
  useEffect(() => localStorage.setItem('users', JSON.stringify(state.users)), [state.users]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className='main'>
        <div className='main-content'>
          <AddUsers>
            <Modals />
            <UserList />
          </AddUsers>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Main;
