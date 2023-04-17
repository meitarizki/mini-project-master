import React, {useState} from "react";
import {Cube} from "phosphor-react";
import {useNavigate} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import {useSelector} from "react-redux";

function Navbar() {
  const navigate = useNavigate();

  const {username} = useSelector((state) => state.userSlice.value);

  let token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {token ? (
        <div>
          <nav className="bg-gray-800 shadow">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <a
                    className="text-white text-xl font-bold md:text-2xl hover:text-gray-200 mr-10"
                    href="#">
                    <Cube size={32} />
                  </a>
                </div>
                <div className=" ml-6 md:block">
                  <Dropdown>
                    <div className="flex flex-row items-center my-auto">
                      <p className="text-white my-auto px-4">
                        Welcome {username}
                      </p>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        style={{color: "#fff"}}>
                        Home
                      </Dropdown.Toggle>
                    </div>

                    <Dropdown.Menu style={{backgroundColor: "#ffff"}}>
                      <Dropdown.Item
                        href="#/action-1"
                        style={{color: "#000000"}}>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/merchant"
                        style={{color: "#000000"}}>
                        Merchant
                      </Dropdown.Item>
                      <Dropdown.Item href="/product" style={{color: "#000000"}}>
                        Add Product
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        onClick={logOut}
                        href="/"
                        style={{color: "#000000"}}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="bg-gray-800 shadow">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <a
                    className="text-white text-xl font-bold md:text-2xl hover:text-gray-200 mr-10"
                    href="#">
                    <Cube size={32} />
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    onClick={() => navigate("/register")}
                    className="text-white text-base font-medium hover:text-gray-200 mr-4"
                    href="#">
                    Sign up
                  </a>
                  <a
                    onClick={() => navigate("/login")}
                    className="text-white text-base font-medium hover:text-gray-200"
                    href="#">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
