import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 mb-2 rounded-lg ${
              task.completed ? "bg-green-200" : "bg-red-200"
            }`}
          >
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <span>Status: {task.completed ? "Completed" : "Incomplete"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
