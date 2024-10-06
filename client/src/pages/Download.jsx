import React from "react";
import app from "../assets/gallery/img4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function Download() {
  return (
    <>
      <section className="bg-gray-900 lg:p-24 mb-12 t0p-0 lg:rounded-b-[10%]">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
          <div className="p-8 top-0 lg:m-8 text-white mb-6 font-roboto lg:w-3/5">
            <h1 className="mb-12 mt-8">GET THE APP</h1>
            <h2 className="font-roboto font-bold mb-12 text-5xl lg:text-6xl">
              Download the <span className="text-customGreen">Helgg</span> App
            </h2>
            <p className="text-roboto font-bold text-gray-400 text-lg">
              Don’t forget to leave us a rating or feedback on the app store so
              we can build better features for you.
            </p>
            <div className="pt-12 flex gap-4 justify-center lg:flex-row">
              <a
                href="https://play.google.com/store/apps/details?id=com.helggscooters.android&pli=1"
                target="_blank"
                aria-label="Download from Google Play Store"
                rel="noreferrer noopener"
              >
                <button
                  aria-label="Download from Google Play Store"
                  className="group relative font-roboto px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none lg:text-sm lg:p-2"
                  id="downloadButton"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="truncate text-lg">Google Play Store</span>
                </button>
              </a>

              <a
                href="https://apps.apple.com/gb/app/helgg-rideelectric/id1626797004"
                target="_blank"
                aria-label="Download from Apple App Store"
                rel="noreferrer noopener"
              >
                <button
                  aria-label="Download from Apple App Store"
                  className="group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-transparent border-2 border-black hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none lg:text-sm lg:p-2"
                  id="downloadButton"
                >
                  <FontAwesomeIcon
                    icon={faApple}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="truncate text-lg">Apple App Store</span>
                </button>
              </a>
            </div>
          </div>
          <div className="p-8 lg:w-4/5">
            <img
              src={app}
              alt="Helgg App promotional image"
              width={400}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
