import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Merchant() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
  });
  console.log(formData);

  const token = localStorage.getItem("token");

  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:2000/auth/merchant";
      const response = await axios.post(url, formData, config);

      alert(response.data.message);
      console.log(response);
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
          Register Merchant
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
        <div className="bg-white flex flex-col gap-5 rounded-xl m-auto p-11">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-left">
              Merchant Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 text-left">
              Address
            </label>
            <div className="mt-1">
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="w-full text-center mt-3 border border-gray-300 px-3 py-2 rounded-lg shadow-sm bg-indigo-700 hover:bg-indigo-800 text-white">
            <button type="submit">Register Merchant</button>
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

export default Merchant;
