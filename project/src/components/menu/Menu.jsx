import { useEffect, useState } from 'react';

import useFetch from '../../hooks/use-fetch';
import MenuList from '../menuList/MenuList';

const Menu = () => {
  const [items, setItems] = useState([]);
  const { data, error, isLoading } = useFetch('https://react-fast-pizza-api.onrender.com/api/menu');

  useEffect(() => {
    if (data) {
      setItems(data.data);
    }
  }, [data]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <MenuList items={items} />
    </>
  );
}

export default Menu;