import React, { useState } from 'react';

export default function AnimalRow(props) {
  const INACTIVE_STATE = {
    active: false,
    styles: {},
    buttonName: 'Activate',
  };

  const ACTIVE_STATE = {
    active: true,
    styles: { color: 'green', fontWeight: 'bold' },
    buttonName: 'Deactivate',
  };

  const [animalRow, setAnimalRow] = useState(INACTIVE_STATE);

  const onToggleActivation = (active) => {
    active ? setAnimalRow(ACTIVE_STATE) : setAnimalRow(INACTIVE_STATE);
  };

  const onClickDelete = (index) => {
    props.sendIndexToDelete(index);
  };

  return (
    <li style={animalRow.styles}>
      {props.animal.icon}
      {props.animal.type}
      <button onClick={() => onToggleActivation(!animalRow.active)}>
        {animalRow.buttonName}
      </button>
      <button onClick={() => onClickDelete(props.index)}>Delete</button>
    </li>
  );
}
