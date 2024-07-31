import useFetch from '../../hooks/use-fetch';
import MenuList from '../MenuList/MenuList';

const Menu = () => {
  const { data, error, isLoading } = useFetch(
    'https://react-fast-pizza-api.onrender.com/api/menu'
  );

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <MenuList items={data?.data} />
    </>
  );
};

export default Menu;
