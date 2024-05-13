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
  isDropdownOpen,
  setIsDropdownOpen,
}) {
  const [dropdownOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);

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
  const colorVariants = {
    open: {
      // color: `${tw`text-primary-content`}`,
      color: "#000",
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
    closed: {
      // color: `${tw`text-base-100`}`,
      color: "#fff",
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
  };
  const invertVariants = {
    open: {
      filter: "invert(0)",
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
    closed: {
      filter: "invert(100%)",
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
  };
  const handleSubmenu = () => {
    if (!isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
    toggleOpen();
  };
  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (dropdownOpen) {
        toggleOpen();
      }
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    }
  };

  function useClickOutside(ref: any) {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target) && dropdownOpen) {
        toggleOpen();
      }
      if (isDropdownOpen) {
        setIsDropdownOpen(!isDropdownOpen);

      }
    }
    useEffect(() => {
      document.addEventListener("keydown", handleHideDropdown, true);
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("keydown", handleHideDropdown, true);
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref, dropdownOpen]);
  }
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef);

  return (
    <>
      <motion.button
        animate={sticky || dropdownOpen || navbarOpen ? "open" : "closed"}
        onClick={() => handleSubmenu()}
        variants={colorVariants}
      >
        <span
          ref={wrapperRef}
          className={`bg-[#DFF3EB] lg:bg-transparent xl:text-base xl:font-normal  lg:text-xs whitespace-nowrap px-6 py-5 tracking-wider font-bold font-serif flex lg:gap-x-2 cursor-pointer items-center justify-between lg:mr-0 lg:inline-flex lg:px-0 lg:py-0 hover:underline underline-offset-8`}
        >
          {menuItem.title}
          <motion.span
            animate={sticky || dropdownOpen || navbarOpen ? "open" : "closed"}
            variants={invertVariants}
            className="invert"
          >
            <CustomIcon
              classes={`w-5 h-5 lg:w-3 lg:h-3 lg:-translate-y-[2px] bg-primary-content`}
              fileName="chevron-down"
            />
          </motion.span>
        </span>
      </motion.button>

      <motion.div
        animate={dropdownOpen ? "open" : "closed"}
        variants={dropdownVariants}
        className={`submenu relative grid grid-rows-[0fr] ${
          isMega
            ? "top-0 lg:w-screen left-0"
            : `${
                sticky ? "xl:mt-[28px] drop-shadow-md" : "xl:mt-[52px]"
              } lg:-ml-6 min-w-[260px] lg:mt-6`
        } px-6 lg:px-2 lg:absolute lg:z-[-1] bg-base-100`}
      >
        <div className="overflow-hidden h-full">
          {menuItem.submenu && (
            <SubMenuItems
              items={menuItem.submenu}
              isMega={isMega}
              handleClickAndClose={handleClickAndClose}
              dropdownOpen={dropdownOpen}
              // handleSubmenu={handleSubmenu}
            />
          )}
        </div>
      </motion.div>
      <div
        className={`${
          dropdownOpen ? "lg:fixed" : "hidden"
        } bg-black/60 duration-300 fixed top-[73px] ${
          sticky && dropdownOpen ? "xl:top-[81px]" : "xl:top-[129px]"
        } xl:top-[129px] inset-0 -z-10`}
      />
    </>
  );
}
