"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  return (
    <header className="grid grid-cols-2 md:grid-cols-3 justify-between items-center w-full text-white px-4 md:px-20 py-6 md:py-12">
      <nav className="hidden sm:flex items-center gap-10 font-montserrat font-extralight">
        {menu.map((m, index) => (
          <Link key={index} href={m.link}>
            {m.title}
          </Link>
        ))}
      </nav>
      <button
        className="sm:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
      <div className="flex md:justify-center justify-end items-center">
        logo
      </div>
      {menuOpen && (
        <div className="sm:hidden w-full animate-fade-down">
          <div className="flex flex-col pt-6 space-y-4">
            {menu.map((m) => (
              <Link
                key={m.title}
                href={m.link}
                onClick={() => setMenuOpen(false)}
              >
                {m.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
