import SubMenuItems from "./SubMenuItems";
import CustomIcon from "@/components/Blocks/CustomIcon";
import { motion, useCycle } from "framer-motion";
import { useRef, useEffect } from "react";
export default function DropdownMenu({
  sticky,
  navbarOpen,
  menuItem,
  isMega,
  handleClickMenu,
  isDropdownOpen,
  setIsDropdownOpen,
  itemClass,
  containerRef,
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
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
    closed: {
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
  };
  const invertVariants = {
    open: {
      transition: {
        ease: "easeOut",
        duration: 0.25,
      },
    },
    closed: {
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
        setIsDropdownOpen(false);
      }
    }
  };

  function useClickOutside(ref: any) {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target) && dropdownOpen) {
        toggleOpen();
      }
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        if (isDropdownOpen) {
          setIsDropdownOpen(!isDropdownOpen);
        }
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
        className="cursor-pointer"
      >
        <span ref={wrapperRef} className={itemClass}>
          {menuItem.title}
          <motion.span
            animate={sticky || navbarOpen ? "open" : "closed"}
            variants={invertVariants}
          >
            <CustomIcon
              classes={`chevron w-3 h-3 bg-primary group-has-[.activeClass]:bg-accent-content`}
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
            ? " lg:w-screen left-0"
            : `${sticky ? "drop-shadow-md" : ""} min-w-[260px]`
        }  drop-shadow-md lg:mt-[36px]  lg:absolute lg:z-[-1] lg:left-1/2 lg:-translate-x-1/2 bg-base-100 text-base-content`}
      >
        <div className="overflow-hidden h-full">
          {menuItem.submenu && (
            <SubMenuItems
              items={menuItem.submenu}
              isMega={isMega}
              handleClickMenu={handleClickMenu}
              dropdownOpen={dropdownOpen}
              itemClass={itemClass}
            />
          )}
        </div>
      </motion.div>
    </>
  );
}
