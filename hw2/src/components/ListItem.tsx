import React from 'react';
import { Statuses } from '../constants/app-constants';
import Button from './Button';

export default function ListItem({ item, updateTaskStatus, archiveTask }) {
  return (
    <li>
      {item.title}
      {item.status === Statuses.ToDo && (
        <Button
          title={'In Progress'}
          onClick={() => updateTaskStatus(item.id, Statuses.InProgress)}
        />
      )}
      {item.status === Statuses.InProgress && (
        <Button
          title={'Todo'}
          onClick={() => updateTaskStatus(item.id, Statuses.ToDo)}
        />
      )}
      {item.status === Statuses.InProgress && (
        <Button
          title={'Done'}
          onClick={() => updateTaskStatus(item.id, Statuses.Done)}
        />
      )}
      {item.status === Statuses.Done && (
        <Button title={'To Archive'} onClick={() => archiveTask(item.id)} />
      )}
    </li>
  );
}
