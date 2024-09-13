import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // For handling authentication (login/logout)
    tasks: taskReducer, // For managing tasks
  },
});

export default store;
