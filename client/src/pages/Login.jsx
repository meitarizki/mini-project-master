import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// redux
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:2000/auth/login";
      const response = await axios.post(url, formData);
      console.log(response.data);

      dispatch(
        login({
          id: response.data.data.id,
          username: response.data.data.username,
          phone_number: response.data.data.phone_number,
          email: response.data.data.email,
          merchant_status: response.data.data.merchant_status,
        })
      );

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value});
  };
  return (
    <div className="bg-slate-100 h-screen pt-5">
      <div className="mb-5">
        <h1 className="text-3xl mb-1 font-bold text-gray-800 text-center">
          Login
        </h1>
        <p className="text-center">
          <Link to="/register" className="text-indigo-800">
            Register here
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
        <div className="bg-white flex flex-col gap-5 rounded-xl m-auto p-11">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="w-full text-center mt-3 border border-gray-300 px-3 py-2 rounded-lg shadow-sm bg-indigo-700 hover:bg-indigo-800 text-white">
            <button type="submit">Sign in</button>
          </div>
          <div className="text-center mt-1">
            <Link to="/" className="text-indigo-800 hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
