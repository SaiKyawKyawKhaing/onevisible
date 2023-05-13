/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import routes from "../../router/routers";
import { FiSearch, FiAlignJustify, FiX } from "react-icons/fi";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setShowNavIcon(true);
      } else {
        setShowNavIcon(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {showNavIcon && (
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <div className="absolute min-h-screen w-full bg-white z-50"></div>
        </motion.nav>
      )}
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-white-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <div className="logo-wrap">
              <div className="logo-wrapper">
                <img src="/images/vcLogo.png" alt="Image Description" />
              </div>
            </div>
          </div>
          {!showNavIcon && (
            <div
              className="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul className="flex list-none ml-auto">
                {routes.map((route) => (
                  <li key={route} className="nav-item flex items-center">
                    <Link
                      to={route.path}
                      className="text-black-500 px-3 py-1 hover:text-cskyblue"
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
                <li className="nav-item flex items-center">
                  <FiSearch />
                </li>
              </ul>
            </div>
          )}
          {showNavIcon && (
            <div className="lg:flex flex-grow items-center">
              <ul className="flex list-none ml-auto justify-end">
                <li
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  className="nav-item flex items-center pointer"
                >
                  {!isOpen ? <FiAlignJustify /> : <FiX />}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
