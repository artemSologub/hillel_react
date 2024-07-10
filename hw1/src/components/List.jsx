import React, { useState } from 'react';

import ListItem from './ListItem';

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);

  const INACTIVE_STATE = {
    active: false,
    classList: '',
    buttonName: 'Activate',
  };

  const ACTIVE_STATE = {
    active: true,
    classList: 'active-list-item',
    buttonName: 'Deactivate',
  };

  const [listItemState, setListItemState] = useState(INACTIVE_STATE);

  const onToggleActivation = (i) => {
    console.log(list.find((item, index) => item === i));
  };

  return list.length ? (
    <ul>
      {list.map((data, index) => (
        <ListItem
          key={index}
          data={data}
          index={index}
          activationButtonState={INACTIVE_STATE}
          handleActivation={onToggleActivation(index)}
        />
      ))}
    </ul>
  ) : null;
}
