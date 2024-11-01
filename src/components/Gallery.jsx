"use client";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/casa1.jpg",
    thumbnail: "/images/casa1.jpg",
  },
  {
    original: "/images/casa2.jpg",
    thumbnail: "/images/casa2.jpg",
  },
  {
    original: "/images/casa3.jpg",
    thumbnail: "/images/casa3.jpg",
  },
  {
    original: "/images/casa4.jpg",
    thumbnail: "/images/casa4.jpg",
  },
  {
    original: "/images/casa5.jpg",
    thumbnail: "/images/casa5.jpg",
  },
  {
    original: "/images/casa6.jpg",
    thumbnail: "/images/casa6.jpg",
  },
  {
    original: "/images/casa7.jpg",
    thumbnail: "/images/casa7.jpg",
  },
  {
    original: "/images/casa8.jpg",
    thumbnail: "/images/casa8.jpg",
  },
  {
    original: "/images/casa9.jpg",
    thumbnail: "/images/casa9.jpg",
  },
  {
    original: "/images/casa10.jpg",
    thumbnail: "/images/casa10.jpg",
  },
  {
    original: "/images/casa11.jpg",
    thumbnail: "/images/casa11.jpg",
  },
  {
    original: "/images/gall2.jpg",
    thumbnail: "/images/gall2.jpg",
  },
];

const Gallery = () => {
  return (
    <div id="gallery" className=" my-2 bg-[#000000] w-full">
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
