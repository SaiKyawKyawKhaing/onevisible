import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Commingsoon = ({ link, desc }) => {
  return (
    <div className="h-screen bg-gray-100 justify-center items-center flex flex-col">
      <div className="py-5 text-3xl font-light">{desc}</div>
      <Btn>
        <Link to={link} className="text-black-500 px-3 py-1 ">
          Back to Home
        </Link>
      </Btn>
    </div>
  );
};

export default Commingsoon;
