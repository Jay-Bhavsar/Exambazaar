import React, { useState } from "react";
const logo = require("./images/logo.png");
const signup = require("./images/signup.png");

const Navbar = () => {
  let Links = [
    { name: "Patym For Customers", link: "" },
    { name: "Patym For Business", link: "" },
    { name: "Investors Relations", link: "" },
    { name: "Company", link: "" },
    { name: "Career", link: "" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="nav md:flex  bg-white  justify-evenly shadow-md  md:h-20 ">
        <div className="items items-center md:order-2 shadow-md">
          <div
            onClick={() => setOpen(!open)}
            className="hamburger absolute text-3xl  top-5 cursor-pointer md:hidden ml-5 order-3"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pt-6 pt-2 space-x-8  left-0 md:static absolute md:shadow-none shadow-md w-[100%]  ${
              open ? "top-24" : "top-[-450px]"
            }   `}
          >
            <li></li>
            {Links.map((link) => (
              <li className="md:my-0 my-6 text-sm font-semibold ">
                <a
                  className=" text-black hover:text-gray-800 duration-500"
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li></li>
          </ul>
        </div>

        <div
          className="logo cursor-pointer items-center md:pt-2 md:order-1 order-2 md:ml-0 ml-20 md:static 
         absolute md:mt-0 mt-2"
        >
          <img src={logo} className="" alt="" />
        </div>

        <div
          className="signup md:pt-3 pt-0 md:mb-0 mb-3 md:pl-0  left-44 
        md:mt-0 mt-4 md:order-3 order-3 md:static absolute  pl-20"
        >
          <button
            className="flex py-1 px-1 bg-blue-400 rounded-3xl hover:bg-blue-900 duration-700 
           hover:text-white "
          >
            <div className="px-4 pt-1 items-center text-white text-sm">
              Sign Up
            </div>
            <div>
              <img src={signup} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
