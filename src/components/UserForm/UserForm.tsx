import React, {useState} from 'react';
import {User, UserMutation} from '../../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userMutation, setUserMutation] = useState<UserMutation>({
    name: '',
    email: '',
    activity: '',
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeActivity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setUserMutation((prev) => ({
      ...prev,
      activity: checked ? name : '',
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...userMutation,
      activity: userMutation.activity === 'yes',
    });

    setUserMutation({
      name: '',
      email: '',
      activity: '',
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
          <input
            name="yes"
            onChange={changeActivity}
            className="form-check-input"
            type="checkbox"
            checked={userMutation.activity === 'yes'}
            id="activityYes"/>
          <label className="form-check-label" htmlFor="activityYes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            name="no"
            onChange={changeActivity}
            className="form-check-input"
            type="checkbox"
            checked={userMutation.activity === 'no'}
            id="activityNo"/>
          <label className="form-check-label" htmlFor="activityNo">
            No
          </label>
        </div>
      </div>
      <div className="form-group mb-4">
        <select
          name="role"
          value={userMutation.role}
          onChange={changeUser}
          className="form-select"
          aria-label="Default select example"
          required>
          <option value="" disabled>Role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default UserForm;
