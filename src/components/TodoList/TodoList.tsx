import React, { FC } from "react";
import TodoTask from "../TodoTask";
import { ITask } from "../../Interfaces";

import { ITodoListProps } from "../../Interfaces";

const TodoList: FC<ITodoListProps> = ({ todoList, completeTask }) => {
  return (
    <div className="todoList">
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />;
      })}
    </div>
  );
};

export default TodoList;
