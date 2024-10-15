import banner6 from "../assets/gallery/banner6.jpg";
import ContentSection from "../layouts/imageSection";
import mockup from "../assets/Images/helggMockup.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Sponsors from "../layouts/sponsors";
import Testimonial from "../layouts/Testimonial";
import Widget from "../layouts/NewsSection";
import AppDownload from "../layouts/AppDownload";
import ReactPlayer from "react-player";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Carousel from "../layouts/Carousel";
import { Link } from "react-router-dom";

const sectionStyle = {
  backgroundImage: `url(${banner6})`,
};

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <main className="bg-gray-50">
        {/* Hero section */}
        <section
          className="mx-2 mb-2 mt-0 rounded-custom-large shadow-5xl  relative bg-cover bg-center object-cover bg-no-repeat h-[100vh] overflow-hidden md:mx-6 lg:mx-16 lg:mb-16 lg:mt-0"
          style={sectionStyle}
          aria-label="Hero section"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <h1 className="group font-roboto text-5xl justify-center text-white font-bold md:text-6xl lg:text-8xl mb-4 opacity-0 animate-slideIn delay-300">
              Embrace the Future of
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Smart</span>

                <span className="absolute left-0 bottom-0 w-full flex items-center">
                  {/* Brush Highlight SVG */}
                  <svg
                    className="w-full h-8 -mt-2 pt-5 lg:h-auto text-customGreen"
                    viewBox="0 0 233 13"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="currentColor"
                      d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                    />
                  </svg>

                  {/* Pencil SVG beside the brush highlight */}
                  <svg
                    className="w-6 mt-1 -pt-1 lg:h-auto ml-2 text-white"
                    viewBox="0 0 51 51"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M36.204 1.044C32.02 2.814 5.66 31.155 4.514 35.116c-.632 2.182-1.75 5.516-2.483 7.409-3.024 7.805-1.54 9.29 6.265 6.265 1.893-.733 5.227-1.848 7.41-2.477 3.834-1.105 4.473-1.647 19.175-16.27 0 0 10.63-10.546 15.21-15.125C53 8.997 42.021-1.418 36.203 1.044Zm7.263 5.369c3.56 3.28 4.114 4.749 2.643 6.995l-1.115 1.7-4.586-4.543-4.585-4.544 1.42-1.157C39.311 3.18 40.2 3.4 43.467 6.413ZM37.863 13.3l4.266 4.304-11.547 11.561-11.547 11.561-4.48-4.446-4.481-4.447 11.404-11.418c6.273-6.28 11.566-11.42 11.762-11.42.197 0 2.277 1.938 4.623 4.305ZM12.016 39.03l3.54 3.584-3.562 1.098-5.316 1.641c-1.665.516-1.727.455-1.211-1.21l1.614-5.226c1.289-4.177.685-4.191 4.935.113Z"
                    />
                  </svg>
                </span>
              </span>{" "}
              Transport
            </h1>

            <p className="font-roboto text-2xl max-w-xl text-gray-500 mb-8 m-4 opacity-0 animate-slideIn delay-100">
              Transforming the African Transportation landscape one electric
              vehicle at a time
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/download">
                <button
                  aria-label="Downlaod buttton"
                  className="h-12 w-full group  relative px-4 sm:px-6 py-2 sm:py-4 text-lg sm:text-lg rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600  hover:shadow-3xl focus:outline-none md:w-full h-16 lg:w-52 lg:h-16"
                >
                  Download App
                  <ChevronRightIcon aria-hidden="true" className="ml-6 md:ml-4 lg:ml-2 " />
                </button>
              </Link>
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=h8lzv_fyRDQ"
              >
                <button
                  aria-label="Play video tutorial"
                  className="text-roboto text-lg m-4 text-white opacity-0 animate-slideIn delay-700 hover:scale-105 hover:text-customGreen"
                >
                  How to Ride
                  <ChevronRightIcon aria-hidden="true" />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h1
              className={`text-3xl text-center font-bold text-gray-900 mb-6 animate-slideIn delay-300 sm:text-4xl lg:text-5xl`}
            >
              Who we are
            </h1>
            <p
              className={`text-lg  text-center  text-gray-700 mb-12 animate-slideIn delay-300 sm:text-xl lg:text-2xl`}
            >
              We are a micro-mobility company creating a shared network of
              electric vehicles that will redefine and transform the African
              transport industry.
            </p>

            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="124"
                height="70"
                viewBox="0 0 124 70"
                fill="none"
                className="w-32 h-auto sm:w-40 lg:w-48"
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
            </div>
          </div>
        </section>

        {/* Video Player Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative w-full aspect-video cursor-pointer rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden"
              onClick={() => setIsPlaying((prev) => !prev)}
            >
              {!isPlaying ? (
                <>
                  <img
                    src={
                      "https://helgg.com/wp-content/uploads/2023/01/IMG_4675.png"
                    }
                    alt="Video Thumbnail"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-customGreen rounded-full p-2 animate-pulse">
                      <PlayCircleIcon
                        style={{ fontSize: 100, color: "black" }}
                      />
                    </div>
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
                  aria-label="Video player"
                  role="application"
                  className="absolute top-0 left-0"
                />
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-1 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center text-gray-800 rounded-lg overflow-hidden">
              <div className="w-full p-6  flex justify-center lg:justify-start lg:p-12 lg:w-1/2">
                <Player
                  src="https://lottie.host/026b5ede-8e07-432f-8ab6-be7509ccc807/PzvxgODDlW.json"
                  className="player"
                  loop
                  autoplay
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />
              </div>
              <div className="w-full p-6 lg:p-12 lg:w-1/2">
                <h1 className="font-roboto text-2xl text-gray-900  text-center font-extrabold mb-6 sm:text-3xl lg:text-4xl xl:text-5xl lg:text-left ">
                  Experience seamless transportation on campus riding e-scooters
                  and bicycles
                </h1>
                <p className="font-roboto text-gray-600  sm:text-xl lg:text-2xl text-center lg:text-left">
                  Unlock a vehicle, ride with friends, pay for trips, and create
                  moments together.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-12 mt-8 lg:mt-0">
                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-gray-800 font-bold mb-6">
                  Zero Carbon Emissions
                </h1>
                <p className="font-roboto text-lg sm:text-xl lg:text-2xl text-center lg:text-left text-gray-600 mb-8">
                  Reduce your carbon footprint by opting for an eco-friendly and
                  sustainable means of transportation.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <Player
                  src="https://lottie.host/f9c7a233-c8d2-41a7-8d14-c47a5b096a67/gjmvilzAjw.json"
                  className="player"
                  loop
                  autoplay
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    height: "auto",
                    aspectRatio: "1.4 / 1",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-roboto text-2xl text-center text-gray-800 font-bold mb-12 md:text-center sm:text-4xl lg:text-5xl lg:center">
              A seamless interconnected electric vehhicle ecosystem
            </h1>
            <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="md:w-3/4 flex flex-col md:flex-row items-center">
                <div className="mb-12 lg:mb-0">
                  <h1 className="font-roboto text-2xl font-bold text-gray-800 mb-4">
                    Electric Bicyle
                  </h1>
                  <p className="font-roboto text-lg sm:text-xl text-gray-600 mb-4">
                    Rideshare e-bicycles with an electric motor and rechargeable
                    battery, providing assistance while pedaling, with a range
                    of 35–65 Km.
                  </p>
                  <button className="font-roboto text-sm text-green-600 flex items-center">
                    Learn More
                    <ChevronRightIcon className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <div className="relative mt-8 lg:mt-12">
                  <div
                    className="inset-0 bg-cover bg-center bg-no-repeat md:bg-none lg:bg-none"
                    // style={{ backgroundImage: `url(${map})` }}
                  >
                    <img
                      src={mockup}
                      alt="Helgg phone mockup"
                      width={400}
                      height={600}
                      className="transparent  relative z-10 mx-auto lg:mx-0 w-full lg:w-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mt-24">
                <div className="mb-12">
                  <h1 className="font-roboto text-2xl text-gray-800 font-bold mb-4">
                    Electric Cars
                  </h1>
                  <p className="font-roboto text-lg sm:text-xl text-gray-600 mb-4">
                    Book zero-emission vehicles powered by electricity, with a
                    range of around 100 Km on a single charge.
                  </p>
                  <button className="font-roboto text-sm text-green-600 flex items-center">
                    Learn More
                    <ChevronRightIcon className="ml-1 w-4 h-4" />
                  </button>
                </div>
                <div className="mt-24">
                  <h1 className="font-roboto text-gray-800 text-2xl font-bold ">
                    Electric Scooters
                  </h1>
                  <p className="font-roboto text-lg sm:text-xl text-gray-600 mb-4">
                    Rideshare e-scooters with a rechargeable battery with a
                    range of 30–59 Km on full charge. Offering convenience for
                    urban commutes.
                  </p>
                  <button className="font-roboto text-sm text-green-600 flex items-center">
                    Learn More
                    <ChevronRightIcon className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <button className="font-roboto text-center bg-customGreen rounded-full px-6 py-3 text-lg hover:bg-green-800 hover:shadow-xl hover:text-white transition-colors">
                Explore the Ev Store
              </button>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 lg:pr-8">
                <h1 className="font-roboto text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left text-gray-800 font-bold mb-6">
                  Unlock the world of electric biking with Helgg.
                </h1>
                <p className="font-roboto text-lg sm:text-xl lg:text-2xl text-center lg:text-left text-gray-600 mt-4">
                  With the Helgg Mobile app , you have access to a network of
                  e-bicycles around you. Simply Scan a QR code, ride and pay for
                  trips with the Helgg Virtual wallet.
                </p>
              </div>
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                <Player
                  src="https://lottie.host/cbb5c895-985f-4990-b2cc-09b0250be903/kaPLRZGgVp.json"
                  className="player"
                  loop
                  autoplay
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-0 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center lg:gap-4 lg:flex-row-reverse  ">
              <div className="font-roboto px-4  w-full space-y-6 lg:w-1/2 ">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold text-center lg:text-left">
                  Get to where you want to be at an affordable rate
                </h1>
                <p className="font-roboto pt-4 text-lg text-gray-600 text-center sm:p-8 sm:text-xl md:text-3xl lg:text-2xl md:mt-2 lg:pt-4 lg:text-left">
                  Save money on cabs and buses by ride sharing our electric cars
                  at affordable rates.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <Player
                  src="https://lottie.host/ddcb3534-4fed-4c45-b6a2-11aefa2ee392/oRGtFpGmeo.json"
                  className="player"
                  loop
                  autoplay
                  style={{ height: "400px", width: "400px", maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* How to helgg section */}
        <ContentSection />
        {/* Sponsor section */}
        <Sponsors />
        {/* Testimonial section */}
        <Testimonial />
        {/* Image carousel section */}
        <Carousel />
        {/* News section */}
        <Widget />
        {/* App download section */}
        <AppDownload />
      </main>
    </>
  );
};

export default Home;
