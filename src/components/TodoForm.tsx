import * as React from 'react';
import { ITask } from 'src/App';

interface IProps {
  currentTask: ITask;
  updateCurrentTask(event: React.ChangeEvent): void;
  addTask(event: React.FormEvent): void;
}

export default function TodoForm(props: IProps) {
  return (
    <form onSubmit={props.addTask}>
      <input
        value={props.currentTask.text}
        onChange={props.updateCurrentTask}
      />
      <button>Add task</button>
    </form>
  );
}
