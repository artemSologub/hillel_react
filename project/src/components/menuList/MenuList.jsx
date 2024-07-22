import MenuItem from '../menuItem/MenuItem';

const MenuList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} data={item} />
      ))}
    </ul>
  );
}

export default MenuList;