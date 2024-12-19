import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { APP_LINKS, contacts } from "../systemConst";
import logo from "../../img/zfg.png";
import { cx } from "../helpers";

const Navbar = () => {
  const [showSidenav, setSidenav] = useState(false);
  const [hideSocials, setHideSocials] = useState(false);
  const navigate = useNavigate();
  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        setHideSocials(window.scrollY > navbarHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="fixed left-0 top-0 z-20 w-full">
        <div
          id="socials"
          className={cx(
            "bg-secondary transition-height duration-300",
            hideSocials
              ? "h-0 overflow-hidden opacity-0"
              : "h-auto opacity-100",
          )}
        >
          <div className="mx-auto flex w-[90%] flex-col items-center justify-between py-2 font-mont text-[16px] text-shade md:flex-row">
            <div className="flex items-center gap-3">
              <p className="hidden text-[12px] font-light sm:block">
                ZORG FINANCIAL GROUP
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
              <a
                href={`tel:${contacts.phone}`}
                className="flex items-center gap-2"
              >
                <span className="iconify mdi--phone"></span>
                <p className="text-[14px]">{contacts.phone}</p>
              </a>

              <a
                href={`mailto:${contacts.email}`}
                className="flex items-center gap-2"
              >
                <span className="iconify mdi--email"></span>
                <p className="text-[14px]">{contacts?.email}</p>
              </a>
            </div>
          </div>
        </div>

        <div ref={navbarRef} className="border-b bg-white shadow-sm">
          <nav className="mx-auto flex w-[90%] items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt=""
                className="inline-block h-[32px] w-[32px]"
                loading="lazy"
              />
            </Link>

            <div className="flex items-center justify-between gap-5 text-sm lg:gap-16">
              {APP_LINKS?.map((link) => (
                <NavLink
                  key={link?.name}
                  to={link?.path}
                  onClick={(e) => {
                    if (link?.disabled) {
                      e?.preventDefault();
                    }
                  }}
                  className={({ isActive }) =>
                    isActive
                      ? "text-dark hover:text-dark hidden !font-orbitron font-semibold uppercase lg:block"
                      : "hover:text-dark hidden !font-orbitron uppercase text-black lg:block"
                  }
                >
                  {link?.name}
                </NavLink>
              ))}

              {showSidenav ? (
                <div className="block bg-white hover:cursor-pointer lg:hidden">
                  <span className="iconify h-[40px] w-[40px] transition-all duration-500 ease-in-out solar--close-square-broken"></span>
                </div>
              ) : (
                <button
                  className="block bg-white lg:hidden"
                  onClick={() => {
                    setSidenav((state) => !state);
                  }}
                >
                  <span className="iconify h-[40px] w-[40px] transition-all duration-500 ease-in-out solar--hamburger-menu-broken"></span>
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
                  }
                  setSidenav(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "mb-5 !font-orbitron uppercase text-primary hover:text-dark"
                    : "mb-5 !font-orbitron uppercase hover:text-dark"
                }
              >
                <p>{link.name}</p>
              </NavLink>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
