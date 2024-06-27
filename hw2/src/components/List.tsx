import React from 'react';
import ListItem from './ListItem';

export default function List({ title, list, updateTaskStatus, archiveTask }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            updateTaskStatus={updateTaskStatus}
            archiveTask={archiveTask}
          />
        ))}
      </ul>
    </div>
  );
}
