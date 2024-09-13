import React from "react";
import TaskForm from "../components/dashboard/TaskForm.jsx";
const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <TaskForm />
    </div>
  );
};

export default AdminDashboard;
