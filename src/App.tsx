import * as React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTasks from './hooks/useTasks';

export interface ITask {
  id: number;
  text: string;
}

const initialTask = {
  id: 0,
  text: ''
};

export default function App() {
  const {
    removeTask,
    tasks,
    currentTask,
    updateCurrentTask,
    addTask
  } = useTasks(initialTask);

  return (
    <>
      <TodoList tasks={tasks} removeTask={removeTask} />
      <TodoForm
        currentTask={currentTask}
        updateCurrentTask={updateCurrentTask}
        addTask={addTask}
      />
    </>
  );
}
