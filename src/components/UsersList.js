// import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function UsersList() {
  const { users, isLoading, error } = useSelector((store) => store.users);

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
        <li key={user.id}>{user.first} {user.last}</li>
      ))}
    </ul>
  );
}

export default UsersList;