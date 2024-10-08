import helgg from "../assets/helgg1.jpeg";
import loot from "../assets/electric-scooter.gif";
import banner6 from "../assets/banner6.jpg";
import Logo from "../assets/helgg-logo-mint-and-cobalt.png";
import map from "../assets/map.png";
import ContentSection from "../layouts/imageSection";
import mockup from "../assets/mockup.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sponsors from "../layouts/sponsors";
import Testimonial from "../layouts/Testimonial";
import Widget from "../layouts/NewsSection";
import AppDownload from "../layouts/AppDownload";
import DownloadIcon from "@mui/icons-material/Download";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Carousel from "../layouts/Carousel";
import { Link } from "react-router-dom";

const sectionStyle = {
  backgroundImage: `url(${banner6})`,
};

const overlayClass = "absolute inset-0 bg-black opacity-70";
const sectionClass =
  "m-12 flex flex-col items-center p-8 ";
const titleClass = "font-roboto text-3xl text-gray-800 font-bold mb-4";
const textClass = "font-roboto text-lg text-gray-500 text-center max-w-2xl";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const bannerTexts = [
    "We are Helgg",
    "A whole new way to travel",
    "Cruise round the campus with ease",
    "Unlock the world of electric biking",
    "Embrace the Future of Smart Transport",
  ];
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerTexts.length]);

  return (
    <>
      <section
        className="w-full relative bg-cover bg-center object-cover bg-no-repeat h-[93vh]"
        style={sectionStyle}
      >
        <div className={overlayClass}></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white animate-fadeIn">
          <h1 className="font-roboto text-7xl justify-center text-white font-bold md:text-6xl lg:text-9xl mb-4 opacity-0 animate-slideIn delay-300">
            {bannerTexts[bannerIndex].includes("Helgg") ? (
              <>
                {bannerTexts[bannerIndex].split("Helgg")[0]}{" "}
                <span className="text-customGreen"> Helgg</span>{" "}
              </>
            ) : (
              bannerTexts[bannerIndex]
            )}
          </h1>
          <p className="font-roboto text-3xl max-w-2xl text-gray-500 mb-8 m-4 opacity-0 animate-slideIn delay-100">
            Your Journey to eco-friendly <br /> transit starts
            <span className="text-customGreen"> here</span>
          </p>

          {/* Transforming the African transportation landscape one electric
            vehicle at a time. */}
          <div className="flex space-x-4">
            <Link to="/download">
              <button
                type="submit"
                className="flex text-roboto text-sm text-gray-900 justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-customGreen backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group opacity-0 animate-slideIn delay-500"
              >
                Download App
                <DownloadIcon style={{ color: "gray" }} />
              </button>
            </Link>
            <a
            target="_blank" 
            href="https://www.youtube.com/watch?v=h8lzv_fyRDQ">
              <button
                type="submit"
                className="text-roboto text-sm mt-2 text-white opacity-0 animate-slideIn delay-700"
              >
                How to Ride
                <ChevronRightIcon />
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className={sectionClass}>
        <h2 className={`${titleClass} animate-slideIn delay-300`}>
          Who we are
        </h2>
        <p className={`${textClass} animate-slideIn delay-300`}>
          We are a micro-mobility company creating a shared network of electric
          vehicles that will redefine and transform the African transport
          industry.
        </p>

        <div className="self-end mt-8">
          <figure
            id="lqd-draw-shape-01d0f95"
            className="lqd-draw-shape"
            data-lqd-draw-shape="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="70"
              viewBox="0 0 124 70"
              fill="none"
            >
              <g clipPath="url(#clip0_447_11012)">
                <path
                  d="M3 24.5L22 4.5L27.5 28L57.5 3L59 44.5L86.5 7C90.5 27.3333 98.5 67.9 98.5 67.5C98.5 67.1 113.5 29.3333 121 10.5"
                  stroke="url(#paint0_linear_447_11012)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_447_11012"
                  x1="0"
                  y1="23.5"
                  x2="123.5"
                  y2="15.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ACEDAB"></stop>
                  <stop offset="1" stopColor="#171E26"></stop>
                </linearGradient>
                <clipPath id="clip0_447_11012">
                  <rect width="124" height="70" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </figure>
        </div>
      </section>

      <section className="m-6 lg:m-32 pb-24">
        <div
          className="relative w-full h-[22.5rem]"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {!isPlaying ? (
            <>
              <img
                src={
                  "https://helgg.com/wp-content/uploads/2023/01/IMG_4675.png"
                }
                alt="Video Thumbnail"
                className="absolute top-0 left-0 h-[22.5rem] lg:h-[32.5rem] w-full object-cover cursor-pointer rounded-[70px]"
              />
              <div className="lg:mt-24 bg-customGreen w-200 h-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <PlayCircleIcon
                  style={{ fontSize: 100, color: "black" }}
                  className="cursor-pointer animate-pulse"
                />
              </div>
            </>
          ) : (
            <ReactPlayer
              url={
                "https://www.youtube.com/embed/K--K8rjro40?autoplay=1&mute=1&loop=1&playlist=K--K8rjro40"
              }
              playing={isPlaying}
              controls
              width="100%"
              height="100%"
              className="absolute top-0 left-0 rounded-[80px]"
            />
          )}
        </div>
      </section>

      <section className="lg:m-24 pt-12">
        <div className="flex flex-col lg:flex-row items-center p-6 bg-background text-foreground">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Player
              src="https://lottie.host/026b5ede-8e07-432f-8ab6-be7509ccc807/PzvxgODDlW.json"
              className="player"
              loop
              autoplay
              style={{ height: "400px", width: "400px" }}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0">
            <h1 className="font-roboto text-2xl md:text-5xl lg:text-left lg:text-left lg:text-5xl text-gray-800 font-bold max-w-2xl">
              Experience seamless transportation on campus riding e-scooters and
              bicycles
            </h1>
            <p className="font-roboto text-gray-900  mt-6 text-center lg:text-left text-2xl">
              Unlock a vehicle, ride with friends, pay for trips, and create{" "}
              <br />
              moments together.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:m-24 flex flex-col-reverse lg:flex-row items-center p-6 bg-background text-foreground">
        <div className="w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0">
          <h1 className="font-roboto text-4xl mb-8 text-center md:text-5xl lg:text-left lg:text-left lg:text-5xl text-gray-800 font-bold max-w-2xl">
            Zero Carbon Emissions
          </h1>
          <p className="font-roboto mt-6 mb-12 text-center lg:text-left text-2xl">
            Reduce your carbon footprint by opting for an eco-friendly and
            sustainable means of transportation.
          </p>
        </div>
        <div className=" lg:w-1/2 flex justify-center lg:justify-start">
          <img src={loot} alt="" width={400} height={400} className="" />
        </div>
      </section>
      <section className="lg:m-24">
        <h1 className="font-roboto text-3xl mb-6 md:text-5xl text-center lg:text-left lg:text-5xl text-gray-800 font-bold max-w-2xl">
          A seamless interconnected electric vehhicle ecosystem
        </h1>
        <div className="flex flex-col md:flex-row p-6">
          <div className="md:w-3/4 flex flex-col md:flex-row items-center">
            <div>
              <h1 className="font-roboto mt-8 text-2xl font-bold text-gray-800">
                Electric Bicyle
              </h1>
              <p className="font-roboto mt-4 text-xl text-gray-600">
                Rideshare e-bicycles with an electric motor and rechargeable
                battery, providing assistance while pedaling, with a range of
                35–65 Km.
              </p>
              <button className="font-roboto mt-4 mb-12 text-sm text-customGreen">
                Learn More
                <ChevronRightIcon />
              </button>
            </div>
            <div className="relative shadow-5xl rounded-[80px] p-0 m-0">
              <img
                src={mockup}
                alt="phone mockup"
                width={900}
                height={900}
                className="p-0 m-0"
              />
              <img
                src={map}
                alt="map"
                className="absolute rounded-[20px] top-0 left-0 w-[85%] h-[90%] object-cover"
                style={{ top: "4%", left: "5%", bottom: "5%" }}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 mt-24">
            <div>
              <h1 className="font-roboto text-2xl text-gray-800 font-bold text-primary">
                Electric Cars
              </h1>
              <p className="font-roboto mt-4 text-xl text-gray-600">
                Book zero-emission vehicles powered by electricity, with a range
                of around 100 Km on a single charge.
              </p>
              <button className="font-roboto mt-4 text-sm text-customGreen">
                Learn More
                <ChevronRightIcon />
              </button>
            </div>
            <div className="mt-24">
              <h1 className="font-roboto text-gray-800 text-2xl font-bold text-primary">
                Electric Scooters
              </h1>
              <p className="font-roboto mt-4 text-xl text-gray-600">
                Rideshare e-scooters with a rechargeable battery with a range of
                30–59 Km on full charge. Offering convenience for urban
                commutes.
              </p>
              <button className="font-roboto mt-4 text-sm text-customGreen">
                Learn More
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="font-roboto text-center bg-customGreen rounded-full p-4 mt-24 mb-8">
            Explore the Ev Store
          </button>
        </div>
      </section>
      <section className="lg:m-24 flex flex-col lg:flex-row items-center p-6 bg-background text-foreground">
        <div className="w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0">
          <h1 className="font-roboto text-4xl mb-8 text-center md:text-5xl lg:text-left lg:text-left lg:text-5xl text-gray-800 font-bold max-w-2xl">
            Unlock the world of electric biking with Helgg.
          </h1>
          <p className="font-roboto mt-6 text-center lg:text-left text-2xl">
            With the Helgg Mobile app , you have access to a network of
            e-bicycles around you. Simply Scan a QR code, ride and pay for trips
            with the Helgg Virtual wallet.
          </p>
        </div>
        <div className=" lg:w-1/2 flex justify-center lg:justify-start">
          <Player
            src="https://lottie.host/cbb5c895-985f-4990-b2cc-09b0250be903/kaPLRZGgVp.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </section>
      <section className="lg:m-24">
        <div className="flex flex-col md:flex-col lg:flex-row items-center p-6 bg-background text-foreground">
          {/* Text section first */}
          <div className="font-roboto w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0">
            <h1 className="text-4xl md:text-5xl text-center lg:text-left lg:text-5xl text-gray-800 font-bold max-w-2xl">
              Get to where you want to be at an affordable rate
            </h1>
            <p className="font-roboto mt-12 text-center lg:text-left text-2xl">
              Save money on cabs and buses by ride sharing our electric cars at
              affordable rates.
            </p>
          </div>

          {/* Image section second */}
          <div className="w-full md:w-full lg:w-1/2 flex justify-center lg:justify-start mt-4 md:mt-4 lg:mt-0 order-2 lg:order-1">
            <img src={loot} alt="" width={300} height={200} />
          </div>
        </div>
      </section>
      <ContentSection />
      <Sponsors />
      <Testimonial />
      <Carousel />
      <Widget />
      <AppDownload />
    </>
  );
};

export default Home;
