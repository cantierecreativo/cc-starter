"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation"; // Importa il nuovo hook
import LanguageSelector from "./LanguageSelector";
import {
  ExternalLinkItemRecord,
  MenuDropdownRecord,
  MenuItemRecord,
  MenuQuery,
  SiteLocale,
} from "@/graphql/generated";
import { Menu } from "./HeaderRenderer";
import resolveLink from "@/lib/resolveLink";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
import ButtonMenu from "./ButtonMenu";

import { useRouter } from "next/navigation";
import { animatePageOut } from "../../../animations";

type Props = {
  locale: SiteLocale;
  data: MenuQuery;
  hrefs?: any;
};

const activeClass = "bg-accent text-accent-content";
const itemClass =
  "hover:underline whitespace-nowrap duration-200 px-4 py-2 flex items-center gap-1";

const invertVariants = {
  open: { transition: { ease: "easeOut", duration: 0.25 } },
  closed: { transition: { ease: "easeOut", duration: 0.25 } },
};

const Header = ({ locale, hrefs, data }: Props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const containerRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleClick = (item: any, newTab: boolean) => {
    if (item !== pathname && !newTab) {
      animatePageOut(item, router);
    } else {
      window.open(item);
    }
  };
  const handleClickMenu = (item: any, e: any, newTab: boolean) => {
    e.preventDefault();
    handleClick(item, newTab);
    handleClickAndClose;
  };

  const handleClickAndClose = () => {
    setNavbarOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const wrapperRef = useRef(null);

  if (!data) return null;

  const menuData: Menu[] = data.layout.menu.map((item) => {
    if (item._modelApiKey === "menu_dropdown") {
      const dropdownItem = item as MenuDropdownRecord;
      const subItems =
        dropdownItem.dropdownType === "text_image"
          ? dropdownItem.megaItems
          : dropdownItem.items;

      return {
        id: item.id,
        title: dropdownItem.title || "Other Items",
        newTab: false,
        submenu: subItems.map((subItem: any) => ({
          id: subItem.id,
          title: subItem.title,
          menuImage:
            dropdownItem.dropdownType === "text_image"
              ? subItem.menuImage
              : undefined,
          path: resolveLink({
            ...subItem.page,
            locale: locale,
            modelRelated: null,
          }),
          newTab: true,
        })),
      };
    } else if (item._modelApiKey === "external_link_item") {
      const menuItem = item as ExternalLinkItemRecord;

      return {
        id: menuItem.id,
        title: menuItem.title,
        path: menuItem.link.url,
        newTab: true,
      };
    } else {
      const menuItem = item as MenuItemRecord;
      return {
        id: menuItem.id,
        title: menuItem.title,
        path: resolveLink({
          ...menuItem.page,
          locale: locale,
          modelRelated: null,
        }),
        newTab: false,
      };
    }
  });

  return (
    <header className="header left-0 flex w-full items-center fixed top-0 z-20">
      <div
        className={`relative isolate z-20 w-full md:py-4 motion-safe:duration-300 ${
          sticky
            ? "bg-primary text-primary-content"
            : "bg-secondary text-secondary-content"
        }
        ${isDropdownOpen ? "drop-shadow-md" : ""}`}
      >
        <div className="container">
          <div className="lg:flex w-full justify-end flex-row-reverse items-center gap-x-8 z-2">
            <div className="hidden lg:flex items-center justify-end">
              <LanguageSelector lng={locale} hrefs={hrefs} />
            </div>
            <div className="w-full flex justify-between items-center ">
              <motion.div
                className="w-28 h-[80px] xl:w-[180px] max-w-full relative z-11"
                animate={sticky || navbarOpen ? "open" : "closed"}
                variants={invertVariants}
              >
                <a
                  href="/"
                  className="block w-full h-full relative cursor-pointer"
                  onClick={(e) => handleClickMenu("/", e, false)}
                >
                  {data.layout.logo.url && (
                    <Image
                      src={
                        !sticky ? data.layout.logoAlt.url : data.layout.logo.url
                      }
                      alt="logo"
                      className="w-full h-full absolute inset-0 object-center object-contain"
                      priority
                      width={100}
                      height={100}
                    />
                  )}
                </a>
              </motion.div>
              <ButtonMenu
                navbarToggleHandler={navbarToggleHandler}
                navbarOpen={navbarOpen}
                sticky={sticky}
                locale={locale}
              />
              <motion.nav
                initial={false}
                animate={isDropdownOpen ? "open" : "closed"}
                id="navbarCollapse"
                ref={containerRef}
                className={`absolute top-[80px] left-0 right-0 z-[-1] lg:z-10  bg-primary text-primary-content motion-safe:duration-700 lg:visible lg:static  lg:!bg-transparent grid lg:h-auto ${
                  navbarOpen ? "h-screen" : "h-0"
                }`}
              >
                <div className="overflow-auto lg:overflow-visible w-full h-full">
                  <ul
                    className={`${
                      sticky
                        ? "lg:text-primary-content [&_.chevron]:bg-primary-content!"
                        : "lg:text-base-content"
                    }  block text-primary-content items-center w-full lg:max-w-auto pt-6 lg:pt-0 pb-4 lg:pb-0 lg:flex gap-x-2`}
                  >
                    {menuData.map((menuItem, i) => {
                      const isMega = menuItem.submenu?.some((i) => i.menuImage);
                      return (
                        <li
                          key={menuItem.id}
                          className={`${
                            isMega ? "" : "relative"
                          } group has-[.activeClass]:bg-accent has-[.activeClass]:text-accent-content 
                              ${i == 4 ? "lg:justify-start lg:ml-auto" : ""}
                              `}
                        >
                          {menuItem.path ? (
                            <motion.div
                              animate={
                                sticky || isDropdownOpen || navbarOpen
                                  ? "open"
                                  : "closed"
                              }
                            >
                              <a
                                href={menuItem.path}
                                className={`${
                                  pathname === menuItem.path ? activeClass : ""
                                } ${itemClass} cursor-pointer px-4 py-2`}
                                target={menuItem.newTab ? "_blank" : ""}
                                onClick={(e) =>
                                  handleClickMenu(
                                    menuItem.path,
                                    e,
                                    menuItem.newTab
                                  )
                                }
                              >
                                {menuItem.title}
                              </a>
                            </motion.div>
                          ) : (
                            <DropdownMenu
                              sticky={sticky}
                              navbarOpen={navbarOpen}
                              isMega={isMega}
                              // handleClickAndClose={handleClickAndClose}
                              handleClickMenu={handleClickMenu}
                              menuItem={menuItem}
                              isDropdownOpen={isDropdownOpen}
                              setIsDropdownOpen={setIsDropdownOpen}
                              itemClass={itemClass}
                              containerRef={containerRef}
                            />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="lg:hidden mt-10 mb-4 container">
                    <LanguageSelector hrefs={hrefs} lng={locale} />
                  </div>
                </div>
              </motion.nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
