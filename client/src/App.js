import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.css";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Merchant from "./pages/Merchant";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},

  {path: "/register", element: <Register />},
  {path: "/login", element: <Login />},
  {path: "/merchant", element: <Merchant />},
  {path: "/product", element: <Product />},
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
