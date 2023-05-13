/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Dropdown from "../common/Dropdown";

const Topbar = () => {
  const infos = [
    { icon: "phone-icon.png", desc: "6248 0838" },
    { icon: "whatsapp.png", desc: "8484 9948" },
    { icon: "email.png", desc: "info@visibleone.com" },
  ];

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-black-opacity-16">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          className="lg:flex flex-grow items-center"
          id="example-navbar-warning"
        >
          <ul className="flex list-none ml-auto justify-end">
            {infos.map((info) => {
              return (
                <li className=" items-center px-3 hidden lg:flex">
                  <div className="icon-wrapper">
                    <img src={`/images/${info.icon}`} alt="Icon" />
                  </div>
                  <a
                    className="px-3 py-1 flex items-center text-xs uppercase leading-snug hover:opacity-75 text-gray-950"
                    href="#pablo"
                  >
                    {info.desc}
                  </a>
                </li>
              );
            })}
            <li>
              <div className="quote hidden lg:flex">
                <div className="icon-wrapper">
                  <img src={`/images/quote.png`} alt="Icon" />
                </div>
                <div className="cursor-pointer"> QUOTE</div>
              </div>
            </li>
            <li className="pl-3">
              <Dropdown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
