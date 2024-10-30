import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Mapbox from "@/components/Mapbox";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center lg:px-10">
      <Hero />
      <About />
      <Gallery />
      <Reservation />
      <Mapbox />
      <Footer />
    </div>
  );
}
