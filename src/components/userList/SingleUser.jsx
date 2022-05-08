const SingleUser = ({ username, description }) => {
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
