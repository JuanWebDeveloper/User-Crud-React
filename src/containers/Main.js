// Containers
import AddUsers from './AddUsers';
import Modals from './Modals';
import UserList from './UserList';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <AddUsers>
          <Modals />
          <UserList />
        </AddUsers>
      </div>
    </div>
  );
};

export default Main;
