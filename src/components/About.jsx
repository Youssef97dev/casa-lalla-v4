import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="md:mt-2 w-full h-full md:h-[140vh] flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/L-21.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-full md:h-1/2 flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-background flex flex-col justify-center items-center text-center gap-5 px-3 lg:px-14 py-5">
          <span className="font-semibold text-lg md:text-xl tracking-widest">
            ABOUT US
          </span>
          <p className="text-sm xl:text-lg">
            {`The restaurant Casa Lalla Takerkoust  is a destination in itself. The menus fuse global gastronomy with local, organic ingredients. Holidaymakers alike are invited to take a seat on the bright, airy terrace for lunch, soaking up the magical Mediterranean ambience and those spectacular Takerkoust Lake.
            Lunchs relax to a soundtrack of live artists and DJs playing chillout music with a world influence twist while sipping on cocktails served from the  bar.`}
            <br />
            {"***"}
            <br />
            {`Casa Lalla Takerkoust is the most prestigious rural restaurant in Marrakech, Lake Lalla Takerkoust region.`}

            {
              "The estate with sprawling beautiful manicured restaurant & terrace is like a slow meandering village."
            }
            <br />
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full bg-transparent"></div>
      </div>
      <div className="w-full h-full md:h-1/2 flex justify-center items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-transparent"></div>
        <div className="w-full md:w-1/2 h-full bg-background flex flex-col justify-center items-center text-center gap-5 px-3 lg:px-14 py-5">
          <p className="text-sm xl:text-lg">
            {`The deep rooted connection to nature in every aspect of the experience, make staying at this luxury restaurant heaven.`}
            <br />
            {"***"}
            <br />
            {`The dining spaces enjoy stunning terraces and glamorous pergolas. The indoor areas with sumptuous authentic rustic décor also provide the perfect way to enjoy the taste of the estate. Mediterranean inspired dishes created with ingredients almost locally sourced.`}
            <br />
            {"***"}
            <br />
            {
              "With sensational golden light views of the estate and the Lake beyond, the romance of the nature is your backdrop."
            }
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
