import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo, logo_white, menu, close } from "../assets";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="px-6   sm:px-10 w-full
    flex items-center py-3 fixed top-0 z-20
    bg-slate-900
    "
    >
      <div
        className="w-full flex justify-between
      items-center max-w-7xl mx-auto
      "
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo_white} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-sm text-white">
            tayyeb <span className="sm:block hidden "> Soltanineajd</span>
          </p>
        </Link>

        <ul className="list-none hidden text-white sm:flex flex-row gap-10 ">
          {navLinks.map((link, index) => (
            <li
              className={`${
                link.title === active ? "text-white" : "text-slate-400"
              } hover:text-white text-[18px] font-medium
              `}
              key={index}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a className="" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px]"
            src={toggle ? close : menu}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "" : "hidden"
            }  rounded-lg absolute top-16 right-0  bg-slate-800 min-w-[140px] p-6 mx-6 my-2
             flex flex-col items-end   
            `}
          >
            <ul className="list-none text-white font-medium ">
              {navLinks.map((link, index) => (
                <li
                  className={`${
                    link.title === active ? "text-white" : "text-slate-400"
                  } hover:text-white text-[18px] font-medium
              `}
                  key={index}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a className="" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
