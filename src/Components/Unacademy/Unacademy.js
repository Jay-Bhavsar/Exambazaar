import React,{useState} from "react";
import Modal from "./modal";
const logo = require("../images/unlogo.png");
const earn = require("../images/earn.png");

const Unacademy = () => {
  const [showModal, setShowModal] = useState(false);
  const handleonClose = ()=> setShowModal(false)
  return (
    <>
      <div className="nav md:flex justify-evenly shadow-md md:h-20">
        <div className="logo cursor-pointer items-center md:pt-6 pt-6 md:mt-0 ">
          <img src={logo} className="" alt="" />
        </div>

        <div className="flex">
          <ul className="flex space-x-1">
            <li>
              <div
                className="signup md:pt-3 pt-0 md:mb-0 mb-3 md:pl-0 left-44 
                  md:mt-0 mt-[-1.9rem] md:order-3 order-3 pl-36"
              >
                <button
                  className="flex py-1 px-1 duration-700 shadow-md
                   "
                >
                  <div className="pt-2">
                    <img src={earn} alt="" />
                  </div>
                  <div className="px-4 py-2 items-center text-sm">
                    Refer and Earn
                  </div>
                </button>
              </div>
            </li>
            <li>
              <div
                className="signup md:pt-3 pt-0 md:mb-0 mb-3 md:pl-0  left-44 
                md:mt-0 mt-[-1.9rem] md:order-3 order-3 pl-11"
              >
                <button onClick={()=>{setShowModal(true)}} className="flex py-1 px-1  duration-700 shadow-md bg-green-500 rounded-lg hover:bg-green-700">
                  <div className="px-4 py-2 items-center text-white text-sm font-semibold">
                    Login
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

     <Modal onClose={handleonClose} visible={showModal}/>
    </>
  );
};

export default Unacademy;
