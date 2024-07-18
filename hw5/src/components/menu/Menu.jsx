import { useCallback, useEffect, useState } from 'react';

import { pizzas } from '../../mockData/data';
import MenuList from '../menuList/MenuList';

const Menu = () => {
  const [items, setItems] = useState([]);

  const getData = useCallback(() => {
    setItems(pizzas);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const onAddCart = () => {
    console.log('ADD TO CART');
  };

  return (
    <>
      <MenuList itemsList={items} onClick={onAddCart} />
    </>
  );
}

export default Menu;