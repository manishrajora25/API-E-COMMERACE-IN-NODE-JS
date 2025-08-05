// import React, { useState } from 'react';
// import Instance from '../Axios.js';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
// import "../Pages/Home.css"

// const Register = () => {
//   const navigate = useNavigate();
//   const [role , setRole]= useState(User)

//   const [form, setForm] = useState({
//     firstname: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await Instance.post('/user/register', form);

//       toast.success('Registration successful! Redirecting to login...', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });

//       setTimeout(() => navigate('/login'), 3000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Registration failed', {
//         position: "top-right",
//         autoClose: 2000,
//         theme: "colored"
//       });
//     }
//   };

//   return (
   

// <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
//   <form
//     onSubmit={handleSubmit}
//     className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md border border-gray-200"
//   >
//     <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Register</h2>

//     <div className="grid grid-cols-1 gap-4 mb-4">
//       <div>
//         <label className="block text-sm font-semibold text-blue-600 mb-1">Enter Name</label>
//         <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
//           <FaUserAlt className="text-blue-400 mr-2" />
//           <input
//             type="text"
//             name="firstname"
//             value={form.firstname}
//             placeholder="Enter Your Name"
//             onChange={handleChange}
//             required
//             className="w-full bg-transparent outline-none"
//           />
//         </div>
//       </div>
//     </div>

//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-blue-600 mb-1">Email</label>
//       <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
//         <FaEnvelope className="text-blue-400 mr-2" />
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Enter Your Email"
//           required
//           className="w-full bg-transparent outline-none"
//         />
//       </div>
//     </div>

//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-blue-600 mb-1">Password</label>
//       <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
//         <FaLock className="text-blue-400 mr-2" />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           placeholder="Enter Your Password"
//           required
//           className="w-full bg-transparent outline-none"
//         />
//       </div>
//     </div>

//     <button
//       type="submit"
//       className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
//     >
//       Register
//     </button>

//     <p className="text-center text-sm text-gray-600 mt-4">
//       Already have an account?{" "}
//       <a href="/login" className="text-blue-500 hover:underline font-medium">
//         Login
//       </a>
//     </p>
//   </form>
// </div>

//   );
// };

// export default Register;








import React, { useState } from 'react';
import Instance from '../Axios.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import "../Pages/Home.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: '',
    email: '',
    password: '',
    role: 'user',  // default role
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Instance.post('/user/register', form);

      toast.success('Registration successful! Redirecting to login...', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored"
      });

      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed', {
        position: "top-right",
        autoClose: 2000,
        theme: "colored"
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Register</h2>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-blue-600 mb-1">Enter Name</label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
              <FaUserAlt className="text-blue-400 mr-2" />
              <input
                type="text"
                name="firstname"
                value={form.firstname}
                placeholder="Enter Your Name"
                onChange={handleChange}
                required
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-blue-600 mb-1">Email</label>
          <div className="flex items-center border rounded-md px-3 py-2 bg-blue-50">
            <FaEnvelope className="text-blue-400 mr-2" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
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
              onChange={handleChange}
              placeholder="Enter Your Password"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        {/* ✅ Role Selection Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-blue-600 mb-1">Select Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-blue-50 text-gray-700 focus:outline-none"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 rounded-xl shadow-md transition-all duration-300"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
