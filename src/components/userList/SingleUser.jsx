import { useContext } from 'react';

// Context
import { UserContext } from '../../context/userContext';

// Helpers
import { isEdit } from '../../helpers/isEdit';

const SingleUser = ({ id, username, description }) => {
  // General state
  const { dispatch } = useContext(UserContext);

  return (
    <div className='single-user'>
      <div className='user-content'>
        <div className='username'>
          <h3>{username}</h3>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
        <div className='actions'>
          <button className='btn-edit' onClick={() => isEdit(id, username, description, dispatch)}>
            Edit
            <i className='fa-solid fa-pen-to-square'></i>
          </button>
          <button className='btn-delete'>
            Delete
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
