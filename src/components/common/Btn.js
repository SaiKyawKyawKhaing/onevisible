import React from "react";

const Btn = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-ccyan to-cskyblue hover:bg-blue-700 text-white font-bold py-5 px-4 w-60 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
