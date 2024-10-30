import Image from "next/image";

const images = [
  "/images/casa13.jpg",
  "/images/casa2.jpg",
  "/images/casa8.jpg",
  "/images/casa9.jpg",
  "/images/casa10.jpg",
  "/images/casa15.jpg",
];

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="w-full flex flex-col justify-center items-center gap-2 md:gap-0 bg-primary_3"
    >
      <span className="font-semibold text-lg md:text-3xl tracking-widest pt-14 pb-8">
        Gallery
      </span>
      <div className="container py-5 w-full h-full">
        <div className="masonry">
          {images.map((src, index) => (
            <div
              key={index}
              className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                layout="responsive"
                width={300}
                height={300}
                className="rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
