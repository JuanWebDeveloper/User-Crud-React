// Handle hide modal create user
import { hideModalCreateUser } from '../../helpers/modals';

export const CreateUser = () => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h3>Create User</h3>
          <button type='button' className='close' aria-label='Close' onClick={hideModalCreateUser}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>

        <div className='modal-body'>
          <form>
            <input type='text' placeholder='Username' />
            <textarea placeholder='User Description'></textarea>
            <button type='button'>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};
