import React from "react";
import TaskList from "../components/dashboard/Tasklist";

const ManagerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>
      <TaskList />
    </div>
  );
};

export default ManagerDashboard;
