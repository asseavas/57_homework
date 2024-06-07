import React from 'react';
import {User} from '../../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-4 text-start">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Activity: {user.activity ? 'Yes' : 'No'}</li>
          <li className="list-group-item">Role: {user.role}</li>
        </ul>
    </div>
  );
};

export default UserItem;