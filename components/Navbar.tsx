"use client";
import useToggleLinks from "@/hook/useToggleLinks";
import {
  ChartNoAxesGantt,
  FolderOpenDot,
  House,
  Menu,
  Send,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [open, toggleLinks] = useToggleLinks();

  const menuItems = [
    {
      link: "/#",
      name: "Home",
      icon: <House />,
    },
    {
      link: "/#about",
      name: "About",
      icon: <UserRound />,
    },
    {
      link: "/#skills",
      name: "Skills",
      icon: <ChartNoAxesGantt />,
    },
    {
      link: "/#portfolio",
      name: "Portfolio",
      icon: <FolderOpenDot />,
    },
    {
      link: "/#contact",
      name: "Contact",
      icon: <Send />,
    },
  ];

  return (
    <nav className="bg-primaryBlue text-white shadow-lg px-3 lg:px-10 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between relative">
      {/* Logo and Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center group">
          {/* Logo */}
          <div className="flex w-14 h-14 lg:w-20 lg:h-20 relative transition-transform duration-500 group-hover:rotate-[360deg]">
            <Image src="/logo.png" alt="Logo Image" fill />
          </div>
          {/* Title */}
          <Link
            href="/"
            className="font-oswald text-lg lg:text-2xl ml-2 transition-all duration-300 group-hover:tracking-wider"
          >
            Haneen Sheikha
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <Menu size={30} onClick={toggleLinks} className="cursor-pointer" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6 mt-4 lg:mt-0 font-oswald">
        {menuItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="group flex items-center gap-2 transition-all duration-200 hover:text-primaryYallow hover:border-b-2 hover:border-primaryYallow hover:translate-y-2 hover:pb-2"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden flex flex-col space-y-5 font-oswald py-3 items-center text-xl ">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group flex items-center gap-5 transition-all duration-200 hover:text-primaryYallow hover:translate-x-2"
              onClick={toggleLinks}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
