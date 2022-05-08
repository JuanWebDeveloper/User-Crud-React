const SingleUser = () => {
  return (
    <div className='single-user'>
      <div className='user-content'>
        <div className='username'>
          <h3>Username</h3>
        </div>
        <div className='description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit labore voluptatem officia vitae eligendi fuga dolore asperiores nemo,
            magnam quidem illum necessitatibus similique nostrum sapiente ipsa consequuntur excepturi minus?
          </p>
        </div>
        <div className='actions'>
          <button className='btn-edit'>
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
