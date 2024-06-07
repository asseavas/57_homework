import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from '../types';
import './App.css';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {name: 'Lol', email: 'lol@gmail.com', activity: true, role: 'editor'},
    {name: 'John', email: 'john@gmail.com', activity: false, role: 'admin'},
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-2 justify-content-evenly">
        <div className="col-5">
          <UserForm onSubmit={addUser} />
        </div>
        <div className="col-4 ">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;
