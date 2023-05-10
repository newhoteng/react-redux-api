import UsersList from './components/UsersList'
// import { useEffect } from 'react';
// import { useDispatch } from "react-redux";
// import { getUsers } from './redux/users/usersSlice';
// import logo from './logo.svg';
import './App.css';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  return (
    <UsersList />
  );
}

export default App;
