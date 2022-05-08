import SingleUser from '../components/userList/SingleUser';

const UserList = () => {
  return (
    <div className='user-list'>
      <div className='list-content'>
        <SingleUser />
        <SingleUser />
        <SingleUser />
      </div>
    </div>
  );
};

export default UserList;
