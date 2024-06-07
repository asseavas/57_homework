import React, {useState} from 'react';
import {User, UserMutation} from '../../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userMutation, setUserMutation] = useState<UserMutation>({
    name: '',
    email: '',
    activity: false,
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...userMutation,
    });

    setUserMutation({
      name: '',
      email: '',
      activity: false,
      role: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit} className="text-start">
      <h4 className="mb-5 text-center">User Form</h4>
      <div className="form-group mb-4">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="form-control"
          onChange={changeUser}
          value={userMutation.name}
          required/>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          onChange={changeUser}
          value={userMutation.email}
          required/>
      </div>
      <div className="form-group mb-4">
        <p className="mb-2">Activity</p>
        <div className="form-check">
          <input name="activity" onChange={changeUser} className="checkbox form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="form-check-input">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input name="activity" onChange={changeUser} className="checkbox form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
          <label className="form-check-label" htmlFor="form-check-input">
            No
          </label>
        </div>
      </div>
      <div className="form-group mb-4">
        <select name="role" value={userMutation.role} className="form-select" aria-label="Default select example">
          <option selected>Role</option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="submit">Create</button>
      </div>
    </form>
  );
};

export default UserForm;