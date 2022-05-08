import { Fragment } from 'react';

// Handle show modal create user
import { showModalCreateUser } from '../helpers/modals';

const AddUsers = ({ children }) => {
  return (
    <Fragment>
      <div className='btn-add_users'>
        <button onClick={showModalCreateUser}>Add User</button>
      </div>
      {children}
    </Fragment>
  );
};

export default AddUsers;
