// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import Button from "/src/components/Shared/Button.jsx";

const Popup = ({ orderPopup, setOrderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md
          bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl"
          >
            {/* Header section */}
            <div className="flex items-center justify-between">
              <h1>Order Now</h1>
              <div>
                <IoCloseOutline
                  onClick={handleOrderPopup}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            {/* Form section */}
            <div className="mt-4">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="text" placeholder="Email" className="form-input" />

              <input type="text" placeholder="Address" className="form-input" />
              <div>
                <Button
                  text="Order Now"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired,
  setOrderPopup: PropTypes.func.isRequired,
};

export default Popup;
