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
