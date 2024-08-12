import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../../src/components/Shared/Button.jsx";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md
            bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl"
        >
          {/* Header section */}
          <div className="flex items-center justify-between">
            <h1>{currState}</h1>
            <div>
              <IoCloseOutline
                onClick={() => setShowLogin(false)}
                className="text-2xl cursor-pointer"
                alt="#"
              />
            </div>
          </div>
          {/* Form section */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="form-input"
              required
            />
            <div>
              <Button
                text="Sign Up"
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
