import { useContext } from 'react';

// Component
import SingleUser from '../components/userList/SingleUser';

// Context
import { UserContext } from '../context/userContext';

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className='user-list'>
      <div className='list-content'>
        {users.map((user) => (
          <SingleUser key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
