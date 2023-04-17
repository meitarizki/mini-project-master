import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confPassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:2000/auth/register";
      const response = await axios.post(url, formData);

      console.log(response);

      if (response.data) {
        alert("Registrasi success");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      alert(error.response.data);
      console.log(error.response.data);
    }
  };

  console.log(formData);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value});
  };
  return (
    <div className="bg-slate-100 pt-5 h-full pb-40">
      <div className="mb-5 text-center">
        <h1 className="text-3xl mb-1 font-bold text-gray-800">
          Create your account
        </h1>
        <p>
          Already registered ?
          <Link to="/login" className="text-indigo-800">
            Sign in
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
        <div className="bg-white flex flex-col gap-5 rounded-xl m-auto p-11">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 text-left">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

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
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700 text-left">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                value={formData.phone_number}
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

          <div>
            <label
              htmlFor="confPassword"
              className="block text-sm font-medium text-gray-700 text-left">
              Password Confirmation
            </label>
            <div className="mt-1">
              <input
                id="confPassword"
                name="confPassword"
                type="password"
                value={formData.confPassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 text-left">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="appearance-none w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
              <option value="">Please select</option>
              <option value="1">Electronix</option>
              <option value="2">Makanan</option>
              <option value="3">Minumna</option>
              <option value="4">Pakaian</option>
            </select>
          </div> */}
          <div>
            <div className="w-full text-center mt-3 border border-gray-300 px-3 py-2 rounded-lg shadow-sm bg-indigo-700 hover:bg-indigo-800 text-white">
              <button type="submit">Sign up</button>
            </div>
            <div className="text-center mt-3">
              <Link to="/" className="text-indigo-800 hover:underline">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
