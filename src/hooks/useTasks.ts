import * as React from 'react';
import { ITask } from 'src/App';

export default function useTasks(initialTask: ITask) {
  const [currentTask, setCurrentTask] = React.useState<ITask>(initialTask);
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  return {
    tasks,

    currentTask,

    updateCurrentTask(event: React.ChangeEvent<HTMLInputElement>) {
      const text = event.target.value;
      setCurrentTask({
        id: Date.now(),
        text
      });
    },

    addTask(event: React.FormEvent) {
      event.preventDefault();

      const newTasks = [...tasks, currentTask];
      setTasks(newTasks);
      setCurrentTask(initialTask);
    },

    removeTask(task: ITask) {
      const newTasks = tasks.filter(t => t.id !== task.id);
      setTasks(newTasks);
    }
  };
}
