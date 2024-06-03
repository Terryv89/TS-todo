import React, { FC } from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNmeToDelete: string): void;
}

const TodoTask: FC = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
        className="btn"
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
