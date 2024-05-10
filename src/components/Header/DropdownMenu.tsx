import SubMenuItems from "./SubMenuItems";
import CustomIcon from "@/components/Blocks/CustomIcon";
import { motion, useCycle } from "framer-motion";
import { useRef, useEffect } from "react";

export default function DropdownMenu({
  sticky,
  navbarOpen,
  menuItem,
  isMega,
  handleClickAndClose,
}) {
  const [dropdownOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);

  const handleSubmenu = () => {
    toggleOpen();
  };

  const dropdownVariants = {
    open: {
      gridTemplateRows: "1fr",
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    closed: {
      gridTemplateRows: "0fr",
      transition: {
        ease: "easeOut",
        duration: 0.35,
      },
    },
  };

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useClickOutside(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          dropdownOpen
        ) {
          toggleOpen();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, dropdownOpen]);
  }
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef);

  return (
    <>
      <motion.a
        ref={wrapperRef}
        animate={sticky || dropdownOpen || navbarOpen ? "open" : "closed"}
        // variants={colorVariants}
        onClick={() => handleSubmenu()}
        className={`bg-[#DFF3EB] xl:text-base xl:font-normal text-accent-content lg:text-base-100 lg:bg-transparent lg:text-xs whitespace-nowrap px-6 py-5 tracking-wider uppercase font-bold font-serif flex lg:gap-x-2 cursor-pointer items-center justify-between lg:mr-0 lg:inline-flex lg:px-0 lg:py-0 hover:underline underline-offset-8`}
      >
        {menuItem.title}
        <motion.span
          animate={sticky || dropdownOpen || navbarOpen ? "open" : "closed"}
          // variants={invertVariants}
          // className="invert"
        >
          <CustomIcon
            classes={`w-5 h-5 lg:w-3 lg:h-3 bg-accent lg:-translate-y-[2px] lg:bg-secondary`}
            fileName="chevron-down"
          />
        </motion.span>
      </motion.a>

      <motion.div
        animate={dropdownOpen ? "open" : "closed"}
        variants={dropdownVariants}
        className={`submenu relative grid grid-rows-[0fr] ${
          isMega
            ? "top-0 lg:w-screen left-0"
            : "lg:mt-6 xl:mt-[52px] lg:-ml-6 min-w-[260px]"
        } px-6 lg:px-2 lg:absolute lg:z-[-1] bg-base-100`}
      >
        <div className="overflow-hidden h-full">
          {menuItem.submenu && (
            <SubMenuItems
              items={menuItem.submenu}
              isMega={isMega}
              handleClickAndClose={handleClickAndClose}
              // handleSubmenu={handleSubmenu}
            />
          )}
        </div>
      </motion.div>
    </>
  );
}
