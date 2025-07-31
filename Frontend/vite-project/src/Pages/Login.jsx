import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:3000/user/login',form,{
          withCredentials: true,
        }
        
      );

      // Save token and redirect
      localStorage.setItem('token', res.data.token);
       toast.success('Login successful!', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      setTimeout(() => navigate('/'), 3000); 
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Login failed', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder='Enter your Email'
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder='Enter Your Password'
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-3">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
