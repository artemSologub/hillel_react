import React, { useState } from 'react';

import AnimalRow from './AnimalRow';

export default function ListState({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);

  const onDeleteRow = (index) => {
    setList(list.filter((_animal, i) => index !== i));
  };

  return list.length ? (
    <ul>
      {list.map((animal, index) => (
        <AnimalRow
          key={index}
          animal={animal}
          index={index}
          sendIndexToDelete={onDeleteRow}
        />
      ))}
    </ul>
  ) : null;
}
