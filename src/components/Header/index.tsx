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
import translate from "@/labels";

type Props = {
  lng: SiteLocale;
  data: MenuQuery;
};

const Header = ({ lng, data }: Props) => {
  const menuData: Menu[] = [];

  const [dropdownOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClickAndClose = () => {
    setNavbarOpen(false);
    if (dropdownOpen) {
      toggleOpen();
    }
  };

  const navbarToggleHandler = () => {
    if (!navbarOpen) {
      setNavbarOpen(!navbarOpen);
    } else {
      setNavbarOpen(!navbarOpen);
      if (dropdownOpen) {
        toggleOpen();
      }
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
        }),
        newTab: false,
      });
    }
  });

  return (
    <header className="header left-0 flex w-full items-center fixed top-0 z-10 after:absolute after:top-0 after:inset-x-0">
      <div
        className={`relative z-[30] w-full bg-primary border-primary-content/20 border-b border-secondary motion-safe:duration-500 text-primary-content`}
      >
        <div className="container">
          <div className="-mx-4 flex items-center justify-between py-2 xl:py-0">
            <motion.div
              className="w-60 max-w-full px-4 xl:mr-12"
              animate={sticky || dropdownOpen || navbarOpen ? "open" : "closed"}
            >
              <Link
                href={"/"}
                className={`header-logo block w-20 ${
                  sticky ? "xl:h-20" : "xl:h-32"
                } h-14 xl:w-36 relative duration-200`}
              >
                {data?.layout?.logo.url && (
                  <Image
                    src={data.layout.logo.url}
                    alt="logo Visit Forte"
                    title="logo Visit Forte"
                    fill
                    priority={true}
                    className="object-left object-contain"
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
                  dropdownOpen={dropdownOpen}
                />
              </div>
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className=" lg:hidden flex gap-3"
                >
                  <span className="font-bold font-serif tracking-widest uppercase">
                    {navbarOpen ? translate("layout.close", lng) : "menu"}
                  </span>
                  <div>
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300
                      ${navbarOpen ? " top-[6px] rotate-45" : ""}
                      ${
                        sticky || navbarOpen
                          ? " bg-primary-content"
                          : " bg-base-100"
                      }
                      `}
                    />
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300
                      ${navbarOpen ? " opacity-0" : ""}
                      ${
                        sticky || navbarOpen
                          ? " bg-primary-content"
                          : " bg-base-100"
                      }
                      `}
                    />
                    <span
                      className={`relative my-1 block h-0.5 w-[20px] transition-all motion-safe:duration-300
                      ${navbarOpen ? " top-[-6px] -rotate-45" : ""}
                      ${
                        sticky || navbarOpen
                          ? "bg-primary-content"
                          : "bg-base-100"
                      }
                      `}
                    />
                  </div>
                </button>
                <motion.nav
                  initial={false}
                  animate={dropdownOpen ? "open" : "closed"}
                  id="navbarCollapse"
                  ref={containerRef}
                  className={`absolute top-[72px] right-0 z-[-1] lg:z-30 w-full bg-base-100 motion-safe:duration-[.75s] lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 grid ${
                    navbarOpen
                      ? "h-screen lg:h-auto after:translate-y-0 after:shadow-primary"
                      : "h-0 lg:h-auto"
                  }`}
                >
                  <div className="overflow-auto lg:overflow-visible h-full">
                    <ul className="block items-center lg:max-w-auto pb-4 lg:pb-0 lg:pt-0 lg:flex lg:gap-x-8 ">
                      {menuData.map((menuItem, index) => {
                        const isMega =
                          menuItem.submenu?.filter((i) => i.menuImage).length >
                          0;
                        return (
                          <li
                            key={index}
                            className={`${isMega ? "" : "relative"}`}
                          >
                            {menuItem.path ? (
                              <motion.div
                                animate={
                                  sticky || dropdownOpen || navbarOpen
                                    ? "open"
                                    : "closed"
                                }
                                className="uppercase"
                              >
                                <Link
                                  href={menuItem.path}
                                  className={`block lg:inline-block hover:underline underline-offset-8 px-6 py-5 xl:text-base lg:text-base-100 tracking-wider text-accent-content uppercase font-bold font-serif xl:font-normal lg:px-0 whitespace-nowrap lg:text-xs lg:py-0`}
                                  onClick={() => handleClickAndClose()}
                                >
                                  {menuItem.title}
                                </Link>
                              </motion.div>
                            ) : (
                              <DropdownMenu
                                sticky={sticky}
                                navbarOpen={navbarOpen}
                                isMega={isMega}
                                handleClickAndClose={handleClickAndClose}
                                menuItem={menuItem}
                              />
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="lg:hidden">
                      <LanguageSelector
                        lng={lng}
                        languages={data?._site?.locales || []}
                        sticky={sticky}
                        navbarOpen={navbarOpen}
                        dropdownOpen={dropdownOpen}
                      />
                    </div>
                  </div>
                </motion.nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
