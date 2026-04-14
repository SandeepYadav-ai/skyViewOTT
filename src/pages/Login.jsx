import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import "./login.css";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Login Successful (Demo)");
  };

  return (
    <div className="login-container">
      <motion.form
        className="login-box"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="logo">SkyView</h1>
        <h2>Login</h2>

        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="login-btn"
        >
          Login
        </motion.button>

        <p className="signup-text">
          New here? <span>Sign Up</span>
        </p>
      </motion.form>
    </div>
  );
};