import Link from "next/link";

const Reservation = () => {
  return (
    <div id="reservation" className="w-full h-[60vh] mt-2">
      <div className="relative h-full w-full flex justify-center items-center">
        <div
          className="absolute z-10 top-0 left-0 w-full h-full bg-cover bg-left"
          style={{
            backgroundImage: "url(/images/casa3.jpg)",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute z-20 inset-0 bg-[#844e2834] h-full mix-blend-multiply "></div>

        {/* Content */}
        <div className="absolute z-30 h-full w-full flex flex-col justify-center items-center text-white px-10 space-y-3">
          <span className="font-semibold text-lg md:text-2xl tracking-widest">
            BOOK YOUR TABLE
          </span>
          <p className="text-base md:text-xl text-center">
            {`Ready to enjoy a lunch at Casa Lalla Takerkoust? We've made it easy to reserve your table:`}
            <br />
            {`Give us a call or Send a WhatsApp message to `}
            <Link
              href="http://wa.me/212675480018"
              target="_blank"
              className="underline"
            >
              +212 675-480018
            </Link>
            <br />
            {` or click the button below.`}
            <br />
            <br />
            <Link
              href=""
              target="_blank"
              className="uppercase border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-all ease-linear"
            >
              Reserve Your Table
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
