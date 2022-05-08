import { useContext } from 'react';

// Component
import SingleUser from '../components/userList/SingleUser';

// Context
import { UserContext } from '../context/userContext';

const UserList = () => {
  const { state } = useContext(UserContext);

  return (
    <div className='user-list'>
      {state.users.length > 0 ? (
        <div className='list-content'>
          {state.users.map((user) => (
            <SingleUser key={user.id} {...user} />
          ))}
        </div>
      ) : (
        <div className='no-users'>
          <h2>No users found</h2>
        </div>
      )}
    </div>
  );
};

export default UserList;
