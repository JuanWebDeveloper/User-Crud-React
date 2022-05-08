import { useEffect, useReducer } from 'react';

// Containers
import AddUsers from './AddUsers';
import Modals from './Modals';
import UserList from './UserList';

// Custom Hooks
import { useUserReducer } from '../hooks/useUserReducer';

// Context
import { UserContext } from '../context/userContext';

const Main = () => {
  const [users, dispatch] = useReducer(useUserReducer, []);

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
