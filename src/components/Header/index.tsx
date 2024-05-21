"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import {
  MenuDropdownRecord,
  MenuItemRecord,
  MenuQuery,
  SiteLocale,
} from "@/graphql/generated";
import { Menu } from "./HeaderRenderer";
import resolveLink from "@/lib/resolveLink";
import { motion, useCycle } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

type Props = {
  lng: SiteLocale;
  data: MenuQuery;
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

const Header = ({ lng, data }: Props) => {
  const menuData: Menu[] = [];
  const [navbarOpen, setNavbarOpen] = useState(false);

  // const [dropdownOpen, toggleOpen] = useCycle(false, true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const handleClickAndClose = () => {
    setNavbarOpen(false);
    console.log("isDropdownOpen", isDropdownOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const navbarToggleHandler = () => {
    if (!navbarOpen) {
      setNavbarOpen(!navbarOpen);
    } else {
      setNavbarOpen(!navbarOpen);
    }
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

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

  if (!data) {
    return null;
  }

  data?.layout?.menu?.map((item) => {
    if (item._modelApiKey === "menu_dropdown") {
      const dropdownItem = item as MenuDropdownRecord;
      const subItems =
        dropdownItem.dropdownType == "text_image"
          ? dropdownItem.megaItems
          : dropdownItem.items;

      menuData.push({
        id: "1",
        title: dropdownItem.title || "Other Items",
        newTab: false,
        submenu: subItems.map((item: any) => {
          if (dropdownItem.dropdownType == "text_image") {
            return {
              id: item.id,
              title: item.title,
              menuImage: item.menuImage,
              path: resolveLink({
                ...item.page,
                locale: lng,
                modelRelated: null,
              }),
              newTab: true,
            };
          } else {
            return {
              id: item.id,
              title: item.title,
              path: resolveLink({
                ...item.page,
                locale: lng,
                modelRelated: null,
              }),
              newTab: true,
            };
          }
        }),
      });
    } else {
      const menuItem = item as MenuItemRecord;
      menuData.push({
        id: menuItem.id,
        title: menuItem.title,
        path: resolveLink({
          ...menuItem.page,
          locale: lng,
          modelRelated: null,
        }),
        newTab: false,
      });
    }
  });

  return (
    <header className="header left-0 flex w-full items-center fixed top-0 z-10 after:absolute after:top-0 after:inset-x-0">
      <div
        className={`relative z-[1] w-full px-6 ${
          sticky
            ? "bg-primary text-primary-content border-primary-content/20"
            : "motion-safe:duration-300"
        }`}
      >
        <div className="">
          <div className="container">
            <div className="-mx-4 flex items-center justify-between">
              <motion.div
                className="w-60 max-w-full xl:mr-12 invert"
                animate={sticky || navbarOpen ? "open" : "closed"}
                variants={invertVariants}
              >
                <Link href={"/"} className={`header-logo block w-full py-7`}>
                  {data?.layout?.logo.url && (
                    <Image
                      src={data.layout.logo.url}
                      alt="logo"
                      width={140}
                      height={30}
                      className={`w-full `}
                      priority={true}
                    />
                  )}
                </Link>
              </motion.div>
              <div className="flex w-full justify-end lg:justify-start lg:flex-row-reverse items-center gap-x-3 md:gap-x-8 px-4">
                <div className="hidden lg:flex items-center justify-end ">
                  <LanguageSelector
                    lng={lng}
                    languages={data?._site?.locales || []}
                    sticky={sticky}
                    navbarOpen={navbarOpen}
                    isDropdownOpen={isDropdownOpen}
                  />
                </div>
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="block lg:hidden"
                  >
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300 ${
                        navbarOpen ? "top-[6px] rotate-45" : ""
                      } ${
                        sticky || navbarOpen
                          ? "bg-primary-content"
                          : "bg-primary"
                      }
                      `}
                    />
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300
                      ${navbarOpen ? "opacity-0" : ""} ${
                        sticky || navbarOpen
                          ? " bg-primary-content"
                          : " bg-primary"
                      }
                      `}
                    />
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300
                      ${navbarOpen ? "top-[-6px] -rotate-45" : ""} ${
                        sticky || navbarOpen
                          ? "bg-primary-content"
                          : "bg-primary"
                      }
                      `}
                    />
                  </button>
                  <motion.nav
                    initial={false}
                    animate={isDropdownOpen ? "open" : "closed"}
                    id="navbarCollapse"
                    ref={containerRef}
                    className={`absolute top-0 right-0 z-[-1] lg:z-30 w-full bg-primary motion-safe:duration-[.75s] lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent after:motion-safe:duration-300 after:motion-safe:delay-300 after:fixed after:inset-x-0 after:h-[100px] after:-translate-y-full after:shadow-[0_200px_50px_-100px_transaprent_inset] after:z-[2] grid ${
                      navbarOpen
                        ? "h-screen lg:h-auto after:translate-y-0 after:shadow-primary"
                        : "h-0 lg:h-auto"
                    }`}
                  >
                    <div className="overflow-auto lg:overflow-visible h-full">
                      <ul
                        className={`${
                          sticky
                            ? "lg:text-primary-content"
                            : "lg:text-base-content"
                        } block text-primary-content items-center xl:container mx-auto lg:max-w-auto pb-4 lg:pb-0 lg:flex lg:gap-x-8`}
                      >
                        {menuData.map((menuItem, index) => {
                          const isMega =
                            menuItem.submenu?.filter((i) => i.menuImage)
                              .length > 0;

                          return (
                            <li
                              key={menuItem.id}
                              className={`py-2 lg:py-6 ${
                                isMega ? "" : "relative"
                              }`}
                            >
                              {menuItem.path ? (
                                <motion.div
                                  animate={
                                    sticky || isDropdownOpen || navbarOpen
                                      ? "open"
                                      : "closed"
                                  }
                                  variants={colorVariants}
                                >
                                  <Link
                                    href={menuItem.path}
                                    className={`hover:opacity-70 hover:underline underline-offset-8 px-8 lg:px-0`}
                                    onClick={() => handleClickAndClose()}
                                  >
                                    {menuItem.title}
                                  </Link>
                                </motion.div>
                              ) : (
                                <>
                                  <DropdownMenu
                                    sticky={sticky}
                                    navbarOpen={navbarOpen}
                                    isMega={isMega}
                                    handleClickAndClose={handleClickAndClose}
                                    menuItem={menuItem}
                                    isDropdownOpen={isDropdownOpen}
                                    setIsDropdownOpen={setIsDropdownOpen}
                                  />

                                  {/* <motion.a
                                    animate={
                                      sticky || isDropdownOpen || navbarOpen
                                        ? "open"
                                        : "closed"
                                    }
                                    variants={colorVariants}
                                    onClick={() => handleSubmenu()}
                                    className={` flex cursor-pointer items-center justify-start py-2 hover:opacity-70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-0 hover:underline underline-offset-8 text-white`}
                                  >
                                    {menuItem.title}
                                    <motion.span
                                      animate={
                                        sticky || isDropdownOpen || navbarOpen
                                          ? "open"
                                          : "closed"
                                      }
                                      variants={invertVariants}
                                      className="invert"
                                    >
                                      <CustomIcon
                                        classes={`ml-1 w-5 h-5 bg-secondary-content`}
                                        fileName="chevron-down"
                                      />
                                    </motion.span>
                                  </motion.a>

                                  <motion.div
                                    animate={isDropdownOpen ? "open" : "closed"}
                                    variants={dropdownVariants}
                                    className={`submenu relative grid grid-rows-[0fr] ${
                                      isMega
                                        ? "top-0 lg:w-screen left-0"
                                        : "lg:mt-4 w-full"
                                    }  bg-primary lg:absolute lg:z-[-1]`}
                                  >
                                    <div className="overflow-hidden h-full">
                                      {menuItem.submenu && (
                                        <SubMenuItems
                                          items={menuItem.submenu}
                                          isMega={isMega}
                                          handleClickAndClose={
                                            handleClickAndClose
                                          }
                                        />
                                      )}
                                    </div>
                                  </motion.div> */}
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="lg:hidden mt-10 mb-4">
                        <LanguageSelector
                          lng={lng}
                          languages={data?._site?.locales || []}
                          sticky={sticky}
                          navbarOpen={navbarOpen}
                          isDropdownOpen={isDropdownOpen}
                        />
                      </div>
                    </div>
                  </motion.nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
