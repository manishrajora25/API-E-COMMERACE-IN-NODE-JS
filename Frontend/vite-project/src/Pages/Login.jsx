// import React, { useState } from 'react';
// import Instance from '../Axios.js';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await Instance.post("/user/login",form,{
//           withCredentials: true,
//         }
        
//       );

//       // localStorage.setItem('token', res.data.token);
//        toast.success('Login successful!', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored",
//       });

//       setTimeout(() => navigate('/'), 3000); 
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || 'Login failed', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored",
//       });
//     }
//   };

//   return (
  

//     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-200"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Login</h2>
    
//         {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
    
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-blue-600 mb-1">Email</label>
//           <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
//             <FaEnvelope className="text-blue-400 mr-2" />
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               placeholder="Enter your Email"
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent outline-none"
//             />
//           </div>
//         </div>
    
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-blue-600 mb-1">Password</label>
//           <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
//             <FaLock className="text-blue-400 mr-2" />
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               placeholder="Enter your Password"
//               onChange={handleChange}
//               required
//               className="w-full bg-transparent outline-none"
//             />
//           </div>
//         </div>
    
//         <button
//           type="submit"
//           className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
//         >
//           Login
//         </button>
    
//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline font-medium">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
    
//   );
// };

// export default Login;






import React, { useState, useContext } from 'react';
import Instance from '../Axios.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { UserContext } from '../component/useContext';  // ✅ Import context

const Login = () => {
  const navigate = useNavigate();
  const { setToken , fetchData } = useContext(UserContext);  // ✅ Use setToken from context

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
      const res = await Instance.post("/user/login", form, {
        withCredentials: true,
      });

      localStorage.setItem('token', res.data.token);  // ✅ Save token to localStorage
      setToken(res.data.token);                       // ✅ Update context to show logout

      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      setTimeout(() => navigate('/'), 3000);
      fetchData()
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-semibold text-blue-600 mb-1">Email</label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
            <FaEnvelope className="text-blue-400 mr-2" />
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-blue-600 mb-1">Password</label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
            <FaLock className="text-blue-400 mr-2" />
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Enter your Password"
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline font-medium">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
