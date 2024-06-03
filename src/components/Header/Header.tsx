import React, { FC } from "react";

const Header: FC = ({ handleChange, addTask, deadline, task }) => {
  return (
    <div className="header">
      <div className="inputContainer">
        <input
          onChange={handleChange}
          type="text"
          name="task"
          placeholder="Task..."
          value={task}
        />
        <input
          onChange={handleChange}
          type="number"
          name="deadline"
          placeholder="Deadline (in days)..."
          value={deadline}
        />
      </div>
      <button onClick={addTask}>Add Todo</button>
    </div>
  );
};

export default Header;
