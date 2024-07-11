import { useEffect, useState } from 'react';

import { USERS_URL } from '../constants/urls';

const User = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${USERS_URL}/${1}`);
        // to handele 300, 500 status
        if (!res.ok) {
          throw new Error('Fetch error');
        }

        const data = await res.json();

        setUser(data);
      } catch (e) {
        console.log('ERROR: ', e.message);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
    </div>
  );
};

export default User;
