import { ChangeEvent } from "react";

export interface ITask {
  taskName: string;
  deadline: number;
}

export interface IHeaderProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
  deadline: number;
  task: string;
}

export interface ITodoListProps {
  todoList: ITask[];
  completeTask: (taskNameToDelete: string) => void;
}
