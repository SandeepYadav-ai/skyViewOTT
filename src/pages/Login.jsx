import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);

      alert("Login Success");
      navigate("/"); // redirect to home
    } else {
      alert(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e)=>setForm({...form,email:e.target.value})} />
      <input type="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
      <button>Login</button>
    </form>
  );
};