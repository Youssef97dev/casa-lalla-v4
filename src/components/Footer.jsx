import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-[#000000]  flex flex-col justify-center items-center py-2  px-3 lg:px-10 lg:py-16  xl:px-40">
      <div>
        <Link href="/">
          <Image
            src="/icons/logo-2.png"
            alt="Logo"
            width={150}
            height={150}
            className="mr-2 pb-6"
          />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 lg:flex-row justify-between items-center  text-white text-sm lg:text-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <span>+212 675-480103</span>
          <span>reservations@casalallatakerkoust.com</span>
        </div>
        <div className="w-full flex  justify-center items-center">
          <span className="text-center">
            Lalla Takerkoust, Marrakech 40000 Morocco
          </span>
        </div>
        <div className="w-full flex flex-row gap-3 justify-center items-center">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram size={18} />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsFacebook size={18} />
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsPinterest size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
