import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { APP_LINKS } from "../systemConst";
import Button from "./Button";
import logo from "../../img/semi-logo.png";
import { cx } from "../helpers";

const Navbar = () => {
  const [showSidenav, setSidenav] = useState(false);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node) &&
        showSidenav
      ) {
        setSidenav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSidenav]);

  return (
    <>
      <section className="fixed left-0 top-0 z-20 w-full">
        <div className="bg-secondary">
          <div className="mx-auto flex w-[90%] flex-col items-center justify-between py-2 font-mont text-[16px] text-shade md:flex-row">
            <div className="flex items-center gap-3">
              <a href="http://" className="hidden hover:text-white md:block">
                <span className="iconify mdi--facebook"></span>
              </a>
              <a href="http://" className="hidden hover:text-white md:block">
                <span className="iconify mdi--twitter"></span>
              </a>
              <p className="hidden text-[12px] font-light sm:block">
                STREAMFLO CHEMICAL DISTRIBUTOR
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
              <a href="tel:+" className="flex items-center gap-2">
                <span className="iconify mdi--phone"></span>
                <p className="text-[14px]">+234(0)700-000-0000</p>
              </a>

              <a href="mailto:" className="flex items-center gap-2">
                <span className="iconify mdi--email"></span>
                <p className="text-[14px]">info@streamflo.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="border-b bg-white shadow-sm">
          <nav className="mx-auto flex w-[90%] items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt=""
                className="inline-block h-[40px] w-[40px]"
                loading="lazy"
              />
            </Link>

            <div className="flex items-center justify-between gap-5 lg:gap-16">
              {APP_LINKS?.map((link) => (
                <NavLink
                  key={link?.name}
                  to={link?.path}
                  onClick={(e) => {
                    if (link?.disabled) {
                      e?.preventDefault();
                    } else if (link?.path === "/contact") {
                      e?.preventDefault();
                      const contactDiv = document.getElementById("contact");
                      if (contactDiv) {
                        contactDiv.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "hidden !font-orbitron font-extralight uppercase text-blue-800 hover:text-blue-800 lg:block"
                      : "hidden !font-orbitron font-extralight uppercase text-black hover:text-blue-800 lg:block"
                  }
                >
                  {link?.name}
                </NavLink>
              ))}

              <Button className="hidden !py-[10px] !border !bg-blue-800 !font-[600] !text-white sm:block">
                GET A QUOTE
              </Button>

              {showSidenav ? (
                <div className="hover:cursor-pointer block bg-white lg:hidden">
                  <span className="solar--close-square-broken iconify h-[40px] w-[40px] transition-all duration-500 ease-in-out"></span>
                </div>
              ) : (
                <button
                  className="block bg-white lg:hidden"
                  onClick={() => {
                    setSidenav((state) => !state);
                  }}
                >
                  <span className="solar--hamburger-menu-broken iconify h-[40px] w-[40px] transition-all duration-500 ease-in-out"></span>
                </button>
              )}
            </div>
          </nav>
        </div>

        <div
          ref={sideNavRef}
          className={cx(
            "overflow-hidden border-b bg-white transition-height duration-500 ease-in-out lg:hidden",
            showSidenav ? "h-[290px] sm:h-[240px]" : "!h-0",
          )}
        >
          <nav className="mx-auto flex w-[90%] flex-col pt-5">
            {APP_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link?.disabled) {
                    e?.preventDefault();
                  } else if (link?.path === "/contact") {
                    e?.preventDefault();
                    const contactDiv = document.getElementById("contact");
                    if (contactDiv) {
                      contactDiv.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setSidenav(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "mb-5 !font-orbitron font-extralight uppercase text-blue-800 hover:text-blue-800"
                    : "mb-5 !font-orbitron font-extralight uppercase hover:text-blue-800"
                }
              >
                <p>{link.name}</p>
              </NavLink>
            ))}
          </nav>

          <div className="mx-auto flex w-11/12 items-center justify-center gap-3 pt-5 sm:hidden md:w-4/5">
            <Button className="w-full !font-[600] !text-white sm:w-2/3 md:w-1/2">
              GET A QUOTE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
