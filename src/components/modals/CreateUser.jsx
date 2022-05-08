// Handle hide modal create user
import { hideModalCreateUser } from '../../helpers/modals';

// Hook
import { useForm } from '../../hooks/useForm';

export const CreateUser = () => {
  // Handle form create user
  const { formValues, handleInputChange, resetForm } = useForm({ username: '', description: '' });
  const { username, description } = formValues;

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
          <form>
            <input type='text' name='username' placeholder='Username' value={username} onChange={handleInputChange} />
            <textarea name='description' placeholder='User Description' value={description} onChange={handleInputChange}></textarea>
            <button type='button'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
