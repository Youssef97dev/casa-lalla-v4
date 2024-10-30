"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiMenuFold4Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="relative h-screen w-full ">
        {/* Parallax Image Background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/casa10.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#000] h-screen mix-blend-multiply opacity-10"></div>

        {/* Hero Content */}
        <div className="z-40 absolute h-full w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
          <Link href="/">
            <Image
              src="/icons/logo-2.png"
              alt="casa lalla tekerkoust"
              width={200}
              height={200}
              className="cursor-pointer w-48 h-48 lg:w-full lg:h-full"
            />
          </Link>
        </div>

        {/* Sidebar Icon in Top-Right */}
        <div className="absolute top-10 right-6 z-50 cursor-pointer text-white">
          <FiMenu size={32} onClick={() => setIsOpenMenu(true)} />
        </div>
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isOpenMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="py-10 px-8 flex flex-col gap-4">
            <div className="w-full flex justify-end cursor-pointer">
              <RiMenuFold4Fill size={28} onClick={() => setIsOpenMenu(false)} />
            </div>
            <div className="w-full flex justify-center items-center">
              <Link href="/">
                <Image
                  src="/icons/logo-1.png"
                  alt="casa lalla tekerkoust"
                  width={130}
                  height={130}
                  className="cursor-pointer w-48 h-48 "
                />
              </Link>
            </div>
            <ul className="mt-4 font-normal text-xl">
              <li className="py-2 hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="py-2 hover:text-primary">
                <Link href="#">Menu</Link>
              </li>
              <li className="py-2 hover:text-primary">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="py-2 hover:text-primary">
                <Link href="#">Reservation</Link>
              </li>
              <li className="py-2 hover:text-primary">
                <Link href="#">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Hero;
