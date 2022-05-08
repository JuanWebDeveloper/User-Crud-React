// Function to show the create user modal
export const showModalCreateUser = () => {
  let modal = document.querySelector('.modal');

  modal.classList.contains('hide-modal') && modal.classList.remove('hide-modal');
  modal.classList.add('show-modal');
};

// Function to hide the create user modal
export const hideModalCreateUser = (resetForm) => {
  let modal = document.querySelector('.modal');

  modal.classList.remove('show-modal');
  modal.classList.add('hide-modal');
  resetForm();
};

// Function to show the user edit modal
export const showModalEditUser = () => {
  let modalEdit = document.querySelector('#modalEdit');

  modalEdit.classList.contains('hide-modal') && modalEdit.classList.remove('hide-modal');
  modalEdit.classList.add('show-modal');
};

// Function to hide the user edit modal
export const hideModalEditUser = (dispatch) => {
  let modal = document.querySelector('#modalEdit');

  modal.classList.remove('show-modal');
  modal.classList.add('hide-modal');

  setTimeout(() => {
    dispatch({ type: 'cancelEdit' });
  }, 600);
};
