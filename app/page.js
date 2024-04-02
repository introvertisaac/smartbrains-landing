import Image from "next/image";
import Topbar from "./components/Topbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
// import 'next-fonts/google/Averia+Sans+Libre.css';
import ModalVideo from "./components/VideoSection";
import Gallery from "./components/Gallery";
import Perks from "./components/Perks";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <ModalVideo
        thumb={{
          src: "https://res.cloudinary.com/doi21kvzt/video/upload/v1711188933/y2mate.com_-_Smart_Brains_Kenya_Founders_Intro_1080p_snankl.jpg",
          width: {
            mobile: 320,
            lg: 700,
          },
          height: {
            mobile: 160,
            lg: 500,
          },
          alt: "Thumbnail image description",
        }}
        video={{
          src: "https://res.cloudinary.com/doi21kvzt/video/upload/v1711188933/y2mate.com_-_Smart_Brains_Kenya_Founders_Intro_1080p_snankl.mp4",
          width: {
            mobile: 640,
            lg: 1920,
          },
          height: {
            mobile: 360,
            lg: 1080,
          },
        }}
      />

      <Courses />
      <Gallery />
      <Perks />
      {/* <Directors /> */}
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
