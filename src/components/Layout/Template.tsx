"use client";

import { useEffect } from "react";
import { animatePageIn } from "../../../animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <div
        id="transition-element"
        className="w-screen h-[100vh] bg-black z-[100] fixed top-0 left-0 text-white font-bold text-6xl flex justify-center items-center"
      >
        LOGO
      </div>
      {children}
    </>
  );
}
