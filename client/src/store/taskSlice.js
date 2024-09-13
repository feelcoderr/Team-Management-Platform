import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "1",
      title: "Initial Task 1",
      description: "This is the first task",
      completed: false,
    },
    {
      id: "2",
      title: "Initial Task 2",
      description: "This is the second task",
      completed: true,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
