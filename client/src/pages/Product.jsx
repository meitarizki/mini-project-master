import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Product() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category_id: 0,
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const config = {
    headers: {authorization: `Bearer ${token}`},
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:2000/product/register";
      const response = await axios.post(url, formData, config);

      console.log(response);

      if (response.data) {
        alert("Add product success");

        //     setTimeout(() => {
        //       navigate("/");
        //     }, 1000);
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
          Sell your product
        </h1>
        <p>
          Register merchant ?
          <Link to="/merchant" className="text-indigo-800">
            here
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-1/3 mx-auto">
        <div className="bg-white flex flex-col gap-5 rounded-xl m-auto p-11">
          <div>
            <label
              htmlFor="naem"
              className="block text-sm font-medium text-gray-700 text-left">
              Product Name
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
              htmlFor="descridescption"
              className="block text-sm font-medium text-gray-700 text-left">
              Description
            </label>
            <div className="mt-1">
              <input
                id="desc"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 text-left">
              Price
            </label>
            <div className="mt-1">
              <input
                id="price"
                name="price"
                type="text"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700 text-left">
              Stock
            </label>
            <div className="mt-1">
              <input
                id="stock"
                name="stock"
                type="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 text-left">
              Image
            </label>
            <div className="mt-1">
              <input
                id="image"
                name="image"
                type="password"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 text-left">
              Category
            </label>
            <div className="mt-1">
              <input
                id="category"
                name="category_id"
                type="text"
                value={formData.category_id}
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
              <button type="submit">Add product</button>
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

export default Product;
