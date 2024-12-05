import React from "react";
import logo from "../../img/semi-logo.png";
import { APP_LINKS } from "../systemConst";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-10 py-20  md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 sm:col-span-2">
          <img src={logo} alt="StreamFlo" className="mb-4 h-12" />
          <p className="w-full lg:w-3/5 text-sm">
            StreamFlo Nigeria is a distributor of industrial chemicals, both
            liquid and dry, including solvents, acids, alcohols, esters,
            aliphatic and aromatic hydrocarbons, glycols, glycol ethers,
            ketones, and phosphates as well as laboratory and reagent-grade
            chemicals.
          </p>
        </div>
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-bold">Navigation</h5>
          <div className="mb-8 h-1 w-12 bg-blue-800 md:mx-0"></div>

          <div>
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
                    ? "mb-3 block font-extralight text-blue-800 hover:text-blue-800"
                    : "mb-3 block font-extralight text-black hover:text-blue-800"
                }
              >
                <span className="iconify mr-2 mdi--menu-right"></span>
                {link?.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <h5 className="mb-2 text-lg font-bold">Contact</h5>
          <div className="mb-8 h-1 w-12 bg-blue-800 md:mx-0"></div>

          <div className="space-y-3">
            <a
              href="tel:+2341234567890"
              className="flex items-center space-x-2"
            >
              <span className="iconify text-black mdi--phone"></span>
              <span>+234-123-456-7890</span>
            </a>
            <a
              href="mailto:info@streamflo.ng"
              className="flex items-center space-x-2"
            >
              <span className="iconify text-black mdi--email"></span>
              <span>info@streamflo.ng</span>
            </a>
            <a
              href="https://www.google.com/maps?q=StreamFlo+Nigeria,+Lagos,+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span className="iconify text-black mdi--location"></span>
              <span>StreamFlo Nigeria, Lagos, Nigeria</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-200 bg-secondary py-3 text-center font-mont text-sm text-gray-50">
        Copyright © 2012 - {new Date().getFullYear()} StreamFlo. Website
        Developed by{" "}
        <a href="mailto:usewebeffects@gmail.com" className="hover:underline">
          Use Web Effects
        </a>
        .
      </div>
    </footer>
  );
}
