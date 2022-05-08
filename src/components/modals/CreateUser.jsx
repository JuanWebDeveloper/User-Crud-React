import { useContext } from 'react';

// Handle hide modal create user
import { hideModalCreateUser } from '../../helpers/modals';

// Hook
import { useForm } from '../../hooks/useForm';

// Context
import { UserContext } from '../../context/userContext';

// Helpers
import { addUser } from '../../helpers/addUser';

export const CreateUser = () => {
  // Handle form create user
  const { formValues, handleInputChange, resetForm } = useForm({ username: '', description: '' });
  const { username, description } = formValues;

  // General state
  const { dispatch } = useContext(UserContext);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h3>Create User</h3>
          <button type='button' className='close' aria-label='Close' onClick={() => hideModalCreateUser(resetForm)}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        <div className='modal-body'>
          <form onSubmit={(e) => addUser(e, username, description, dispatch, resetForm)}>
            <input type='text' name='username' placeholder='Username' value={username} onChange={handleInputChange} required autoComplete='off' />
            <textarea name='description' placeholder='User Description' value={description} onChange={handleInputChange} required></textarea>
            <button type='submit'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
