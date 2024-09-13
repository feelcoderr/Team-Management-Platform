import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice"; // Assuming you have an auth slice
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetching user role from Redux (assuming it's stored in the auth state)
  const { isAuthenticated, userRole } = useSelector((state) => state.auth);

  // Handles user logout logic
  const handleLogout = () => {
    // Dispatch logout action from authSlice to reset authentication state
    dispatch(logout());
    // Redirect to login page after logout
    navigate("/");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Team Management
        </Link>

        {/* Role-based Links */}
        <ul className="flex space-x-6">
          {isAuthenticated && userRole === "admin" && (
            <li>
              <Link to="/admin" className="hover:text-gray-200">
                Admin Dashboard
              </Link>
            </li>
          )}

          {isAuthenticated && userRole === "manager" && (
            <li>
              <Link to="/manager" className="hover:text-gray-200">
                Manager Dashboard
              </Link>
            </li>
          )}

          {isAuthenticated && userRole === "employee" && (
            <li>
              <Link to="/employee" className="hover:text-gray-200">
                Employee Dashboard
              </Link>
            </li>
          )}

          {/* Logout Button */}
          {isAuthenticated && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
