import React from 'react';
import UserItem from './UserItem';
import {User} from '../../../types';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div className="p-4 bg-body-secondary rounded shadow-sm">
      <h4 className="mb-5">Users</h4>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;