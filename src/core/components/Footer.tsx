import React from "react";
import logo from "../../img/zfg.png";
import { APP_LINKS } from "../systemConst";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 sm:col-span-2">
          <img src={logo} alt="Zorg Financial Group" className="mb-4 h-12" />
          <p className="w-full text-sm lg:w-3/5">
            Zorg Financial Group is dedicated to providing innovative financial
            solutions, including wealth management, investment advisory,
            corporate financing, and insurance services tailored to meet your
            financial goals.
          </p>
        </div>
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-bold">Navigation</h5>
          <div className="mb-8 h-1 w-12 bg-primary md:mx-0"></div>

          <div className="text-sm">
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
                    ? "hover:text-dark mb-3 block text-primary"
                    : "hover:text-dark mb-3 block"
                }
              >
                <span className="iconify mr-2 mdi--menu-right"></span>
                {link?.name}
              </NavLink>
            ))}

            <NavLink
              to="/privacy-policy"
              className={({ isActive }) =>
                isActive
                  ? "hover:text-dark mb-3 block text-primary"
                  : "hover:text-dark mb-3 block"
              }
            >
              <span className="iconify mr-2 mdi--menu-right"></span>
              Privacy Policy
            </NavLink>
          </div>
        </div>
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-bold">Contact</h5>
          <div className="mb-8 h-1 w-12 bg-primary md:mx-0"></div>

          <div className="space-y-3 text-sm">
            <a
              href="tel:+2347012345678"
              className="hover:text-dark flex items-center space-x-2"
            >
              <span className="iconify mdi--phone"></span>
              <span>+234-701-234-5678</span>
            </a>
            <a
              href="mailto:contact@zorgfinancial.ng"
              className="hover:text-dark flex items-center space-x-2"
            >
              <span className="iconify mdi--email"></span>
              <span>contact@zorgfinancial.ng</span>
            </a>
            <a
              href="https://www.google.com/maps?q=Zorg+Financial+Group,+Victoria+Island,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-dark flex items-center space-x-2"
            >
              <span className="iconify mdi--location"></span>
              <span>Zorg Financial Group, Canada</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 bg-secondary py-3 text-center font-mont text-sm text-gray-50">
        <div className="mx-auto w-[90%]">
          <p className="text-sm">
            Copyright © 2012 - {new Date().getFullYear()} Zorg Financial Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
