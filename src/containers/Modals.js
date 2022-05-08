import { Fragment, useContext } from 'react';

// Modals
import { CreateUser } from '../components/modals/CreateUser';
import { EditUser } from '../components/modals/EditUser';

// Context
import { UserContext } from '../context/userContext';

const Modals = () => {
  const { state } = useContext(UserContext);

  return (
    <Fragment>
      <CreateUser />
      {state.isEdit && <EditUser />}
    </Fragment>
  );
};

export default Modals;
