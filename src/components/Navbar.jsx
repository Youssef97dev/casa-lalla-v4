"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//import { Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 bg-background shadow-md px-5">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/icons/logo-1.png"
              alt="casa lalla takerkoust logo"
              width={120}
              height={120}
              className="cursor-pointer w-[70%] h-[70%] md:w-full md:h-full"
            />
          </Link>
          <div className="flex justify-center items-center ">
            {/* Book table button */}
            <div className="hidden md:block">
              <Link
                href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
                target="_blank"
                className="border border-primary_2 bg-transparent text-primary_2 px-4 py-2 hover:bg-primary_2 hover:text-primary transition-all ease-linear"
              >
                Book a Table
              </Link>
            </div>
            {/* Langue */}
            <div
              className="relative "
              onMouseLeave={() => setIsDropdownOpen(false)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
                <img
                  src="/icons/english.png"
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <IoMdArrowDropdown size={18} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-8 bg-primary_9 mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                  <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                    <Link href="#">
                      <img
                        src="/icons/english.png"
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-primary_3 rounded-lg cursor-pointer">
                    <Link href="/fr">
                      <img
                        src="/icons/france.png"
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            {/* Menu Icon */}
            <div className="">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Full-screen mobile menu 
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed top-0 left-0 w-full h-screen bg-primary z-20 flex flex-col items-center justify-center">
          <ul className="space-y-5 md:space-y-10 text-center text-white text-xl md:text-4xl font-medium">
            <li>
              <Link
                href="#about"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                href="#location"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-primary_2"
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lesalamamarrakech.com/menu/lunch/"
                target="_blank"
                className="hover:text-primary_2"
              >
                MENU
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary_2">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary_2">
                EVENTS
              </Link>
            </li>
          </ul>
        </div>
      </Transition>*/}
    </>
  );
};

export default Navbar;
