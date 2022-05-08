import { useContext, useEffect } from 'react';

// Hook
import { useForm } from '../../hooks/useForm';

// Context
import { UserContext } from '../../context/userContext';

// Helpers
import { hideModalEditUser, showModalEditUser } from '../../helpers/modals';
import { editUser } from '../../helpers/editUser';

export const EditUser = () => {
  // General state
  const { state, dispatch } = useContext(UserContext);
  const { isEdit } = state;

  // Handle form create user
  const { formValues, setFormValues, handleInputChange } = useForm({ username: '', description: '' });
  const { username, description } = formValues;

  // Show and load the data you want to edit in the modal
  useEffect(() => {
    showModalEditUser();
    setFormValues({ username: isEdit.username, description: isEdit.description });
  }, []);

  return (
    <div className='modal' id='modalEdit'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h3>Edit User</h3>
          <button type='button' className='close' aria-label='Close' onClick={() => hideModalEditUser(dispatch)}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        <div className='modal-body'>
          <form onSubmit={(e) => editUser(e, isEdit.id, username, description, dispatch)}>
            <input type='text' name='username' placeholder='Username' value={username} onChange={handleInputChange} required autoComplete='off' />
            <textarea name='description' placeholder='User Description' value={description} onChange={handleInputChange} required></textarea>
            <button type='submit'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};
