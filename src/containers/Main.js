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
  const [users, dispatch] = useReducer(useUserReducer, [], init);

  // Save users to LocalStorage
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
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
