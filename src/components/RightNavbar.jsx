import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export default function RightNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const links = ["Home", "Services", "About Us", "Contact"];

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = () => {

    const hardcodedUser = "admin";
    const hardcodedPass = "12345";

    if (username === hardcodedUser && password === hardcodedPass) {

      localStorage.setItem("user", username);

      setUser(username);
      setShowLogin(false);
      setUsername("");
      setPassword("");

      alert("Login Successful");

    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {

    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-center">

      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-10">

        {links.map((item) => {

          const path =
            item === "Home"
              ? "/"
              : `/${item.toLowerCase().replace(/\s+/g, "")}`;

          return (
            <NavLink key={item} to={path} className="relative pb-2">

              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-blue-600" : "text-gray-700"}>
                    {item}
                  </span>

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}

            </NavLink>
          );
        })}

        {!user ? (
          <>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gray-200 px-5 py-1.5 text-sm rounded hover:bg-gray-400 transition shadow"
            >
              Login
            </button>

            <button className="bg-blue-600 text-white px-5 py-1.5 text-sm rounded-lg hover:bg-blue-800 transition shadow">
              Sign Up
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4">

            {/* User Icon */}
            <div
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <FaUserCircle size={26} className="text-gray-600"/>
              <span className="font-medium">{user}</span>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>

          </div>
        )}

      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden ml-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-8 w-[350px] shadow-lg">

            <h2 className="text-xl font-semibold mb-4">
              Login
            </h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-4"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 text-sm text-gray-500"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </div>
  );
}