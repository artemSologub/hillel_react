import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { USERS_URL } from '../constants/urls';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(USERS_URL);
        // to handele 300, 500 status
        if (!res.ok) {
          throw new Error('Fetch error');
        }

        const data = await res.json();

        setUsers(data);
      } catch (e) {
        console.log('ERROR: ', e.message);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
