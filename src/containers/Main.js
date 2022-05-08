// Containers
import AddUsers from './AddUsers';
import Modals from './Modals';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-content'>
        <AddUsers>
          <Modals />
        </AddUsers>
      </div>
    </div>
  );
};

export default Main;
