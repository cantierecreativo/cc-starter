"use client";

import React from "react";

type Props = {
  navbarToggleHandler: any;
  navbarOpen: Boolean;
};

const ButtonMenu = ({ navbarToggleHandler, navbarOpen }: Props) => {
  return (
    <button
      onClick={navbarToggleHandler}
      id="navbarToggler"
      aria-label="Mobile Menu"
      className="flex text-xs items-center lg:hidden text-primary-content justify-center"
    >
      <span className="uppercase font-serif pr-2">
        {navbarOpen ? "close" : "menu"}
      </span>
      <div>
        <span
          className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300 ${
            navbarOpen ? "top-[6px] rotate-45" : ""
          } bg-primary-content`}
        />
        <span
          className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300 ${
            navbarOpen ? "opacity-0" : ""
          } bg-primary-content`}
        />
        <span
          className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300 ${
            navbarOpen ? "top-[-6px] -rotate-45" : ""
          } bg-primary-content`}
        />
      </div>
    </button>
  );
};

export default ButtonMenu;
