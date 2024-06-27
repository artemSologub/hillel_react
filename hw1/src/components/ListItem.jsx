import React, { useState } from 'react';

import Button from './Button';

export default function ListItem({ key, data, index, handleActivation }) {
  const [itemData, setItemData] = useState(data);
  const buttonName = 'Activate';

  return (
    <li>
      {itemData.icon}
      {itemData.type}
      <Button buttonName={'Activate'} />
      <Button buttonName={'Delete'} />
    </li>
  );
}
