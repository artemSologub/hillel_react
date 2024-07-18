import MenuItem from '../menuItem/MenuItem';

const MenuList = ({ itemsList, onClick }) => {
  return (
    <ul>
      {itemsList.map((item) => (
        <MenuItem key={item.id} data={item} onClick={onClick} />
      ))}
    </ul>
  );
}

export default MenuList;