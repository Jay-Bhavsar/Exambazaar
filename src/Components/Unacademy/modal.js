import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function Modal({ visible, onClose }) {
  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-end items-center">
        <div className="bg-white md:w-[50%] w-[100%] h-[100%] flex justify-start flex-col">
          <button className="text-2xl absolute pl-10 pt-8" onClick={onClose}>
          <ion-icon name="close"></ion-icon>
          </button>

          <div className="flex items-center justify-start pl-11 pt-24 text-2xl font-semibold text-gray-800">
            <h1>Login</h1>
          </div>

          <div className="flex items-center justify-start pl-11 pt-5 font-semibold text-sm text-gray-800">
            or{" "}
            <span className="pl-3 cursor-pointer text-green-600">
              create your account
            </span>
          </div>

          <div className="flex items-center justify-start pl-11 pt-12 font-semibold text-sm text-gray-800">
            <input
              type="tel"
              placeholder="Enter your mobile Number"
              className="h-10 w-80 p-4 shadow-md"
            />
          </div>

          <div className="flex items-center justify-start pl-11 pt-12 text-sm text-gray-800">
            <button className="px-4 py-3 bg-green-600 rounded-md text-white font-semibold ">
              Login
            </button>
            <span className=" pl-28 cursor-pointer">Continue with e-mail</span>
          </div>

          <div className="flex items-center justify-start pl-11 pt-12 text-sm text-gray-800">
            <p>
              Having trouble? Please contact help@unacademy.com for further
              support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
