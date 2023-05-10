import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/usersSlice';

function UsersList() {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
      ))}
    </ul>
  );
}

export default UsersList;