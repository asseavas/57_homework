import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import './App.css';

const App = () => {

  return (
    <div className="container-fluid">
      <div className="row mt-2 justify-content-evenly">
        <div className="col-5">
          <UserForm />
        </div>
        <div className="col-4 ">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default App;
