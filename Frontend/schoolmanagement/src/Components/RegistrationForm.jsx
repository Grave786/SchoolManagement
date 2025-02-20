// import React from "react";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signup } from "../services/authService";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "Student",
//     profilePicture: null,
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === "file") {
//       setFormData({ ...formData, profilePicture: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       await signup(formData);
//       toast.success("Registration successful!");
//     } catch (error) {
//       toast.error(error.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             className="w-full p-2 border rounded mb-2"
//             onChange={handleInputChange}
//           />
//           {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded mb-2"
//             onChange={handleInputChange}
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               className="w-full p-2 border rounded mb-2"
//               onChange={handleInputChange}
//             />
//             <span
//               className="absolute right-3 top-3 cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//           {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

//           <select
//             name="role"
//             className="w-full p-2 border rounded mb-2"
//             onChange={handleInputChange}
//             value={formData.role}
//           >
//             <option value="Student">Student</option>
//             <option value="Teacher">Teacher</option>
//             <option value="Admin">Admin</option>
//           </select>

//           <input
//             type="file"
//             name="profilePicture"
//             className="w-full p-2 border rounded mb-2"
//             onChange={handleInputChange}
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded mt-2"
//             disabled={loading}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../services/authService";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signup(formData);
      toast.success("Registration successful!");

      // ✅ Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded mb-2"
              onChange={handleInputChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}

          <select
            name="role"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
            value={formData.role}
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>

          <input
            type="file"
            name="profilePicture"
            className="w-full p-2 border rounded mb-2"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-2"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
