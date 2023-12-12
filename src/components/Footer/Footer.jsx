import React from "react";
import radar from "../images/radar.png";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={radar} className="h-10" alt="ChartGen" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ChartGen
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <NavLink
                to="/about"
                className={({isActive}) =>
                  `hover:underline me-4 md:me-6 ${
                    isActive
                      ? "text-orange-600"
                      : "text-gray-500 sm:mb-0 dark:text-gray-400"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <a className="hover:underline me-4 md:me-6 ">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({isActive}) =>
                  `hover:underline me-4 md:me-6 ${
                    isActive
                      ? "text-orange-600"
                      : "text-gray-500 sm:mb-0 dark:text-gray-400"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className="hover:underline">ChartGen™</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
