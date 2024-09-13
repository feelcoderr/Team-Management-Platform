import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userRole = action.payload.role; // Payload includes role (admin, manager, employee)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = null; // Clear user role on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
