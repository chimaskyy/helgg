import App from "../assets/appp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function AppDownload() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Flex container for text and testimonials */}
        <div className="m-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Text Content */}
          <div className="lg:w-3/5">
            <img src={App} alt="" />
          </div>

          <div className="lg:w-2/5 mt-38">
            <p className="text-sm bg-gray-200 rounded-full w-10 p-2 font-thin">
              GET THE APP
            </p>
            <h1 className="text-5xl font-bold text-gray-800">
              Download Helgg app and start Riding!
            </h1>
            <div className="pt-12 flex gap-4 flex-wrap justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.helggscooters.android&pli=1"
                target="_blank"
                aria-label="Google Play Store"
                rel="noreferrer noopener"
              >
                <button
                  aria-label="Google Play Store"
                  className="group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-green-300 border-2 border-white hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none"
                  id="downloadButton"
                >
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="truncate">Google Play Store</span>
                </button>
              </a>

              <a
                href="https://apps.apple.com/gb/app/helgg-rideelectric/id1626797004"
                target="_blank"
                aria-label="Apple Play Store"
                rel="noreferrer noopener"
              >
                <button
                  aria-label="Apple Play Store"
                  className="group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-transparent border-2 border-black hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-3xl focus:outline-none"
                  id="downloadButton"
                >
                  <FontAwesomeIcon
                    icon={faApple}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="truncate">Apple Play Store</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
