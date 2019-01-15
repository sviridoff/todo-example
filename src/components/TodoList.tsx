import * as React from 'react';
import { ITask } from 'src/App';

interface IProps {
  tasks: ITask[];
  removeTask(task: ITask): void;
}

export default function TodoList(props: IProps) {
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => props.removeTask(task)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
