import React from "react";
import { links } from "../assets/links";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <section className="bg-blue-200">
      <nav className="w-11/12 md:w-2/3 mx-auto md:flex justify-between items-center p-4">
        <div className="flex text-blue-700 font-semibold justify-between w-full md:w-1/4">
          <div className="flex">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="icons"
              class="svg-inline--fa fa-icons fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-8 w-8"
            >
              <path
                fill="currentColor"
                d="M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"
              ></path>
            </svg>
            <h1 className="pl-4">GG-Store</h1>
          </div>
          <button
            className="md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            toggle
              ? "flex-col flex md:w-1/2 md:justify-between md:items-center mt-4 md:mt-0  md:flex md:flex-row block transition transition-all duration-300 ease-in-out"
              : "flex-col flex md:w-1/2 md:justify-between md:items-center mt-4 md:mt-0  md:flex md:flex-row hidden transition transition-all duration-300 ease-in-out"
          }`}
        >
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <button
                className="capitalize tracking-widest text-blue-600 font-semibold"
                key={id}
              >
                <Link to={url}>{text}</Link>
              </button>
            );
          })}
        </div>
      </nav>
    </section>
  );
};
