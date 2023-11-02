"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const Links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [closeNav, setcloseNav] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setcloseNav(!closeNav);
  };

  const close = () => {
    setcloseNav(!closeNav);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-row gap-10 justify-between h-24 items-center">
      <Link href="/" className="font-bold text-2xl">
        EX
      </Link>

      <div className="flex gap-10">
        <DarkModeToggle />
        <button className="md:hidden" onClick={toggleNav}>
          <svg
            className="w-6 h-6 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div
          className={`${
            isNavOpen
              ? "hidden"
              : "hidden  md:flex md:flex-row gap-10 items-center"
          }   `}
        >
          {Links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))}

          {session.status === "authenticated" && (
            <button
              className="rounded-lg bg-green-700 px-4 py-1"
              onClick={signOut}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div
        className={`${
          closeNav
            ? "w-1/2 bg-slate-400 opacity-90 z-50 text-black h-screen absolute left-0 top-0 bottom-0 transition-all duration-500 ease-in "
            : "w-1/2 bg-slate-400 opacity-90 text-black h-screen absolute -left-[1000px] top-0 bottom-0 transition-all duration-500 ease-in"
        } `}
      >
        <div className="flex items-center justify-between p-10">
          <h1 className=" font-bold text-5xl">EX</h1>
          <svg
            onClick={close}
            className="w-8 h-8 text-black "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </div>
        <div
          className="flex mt-10 flex-col gap-12 items-start justify-center ms-10 font-bold"
          onClick={close}
        >
          {Links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
