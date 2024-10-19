import app from "../assets/gallery/ap-portrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function Download() {
  return (
    <>
      <main>
        <section className="bg-gray-900 lg:p-12 mb-12 t0p-0 lg:rounded-b-[10%]">
          <div className="flex flex-col gap-8 lg:flex-row-reverse lg:justify-center lg:items-center">
            <div className="p-8 top-0 lg:m-8 text-white mb-6 font-roboto lg:w-2/3">
              <h1 className="mb-8 mt-8">GET THE APP</h1>
              <h2 className="font-roboto font-bold mb-12 text-5xl lg:text-8xl">
                Download the {""}
                <span className="growth__background-overlay inline-block relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-1 before:h-2 hover:before:h-20 lg:hover:before:h-20 before:bg-green-300 before:-z-10 ">
                  Helgg
                </span>{" "}
                App
              </h2>
              <p className="text-roboto font-bold text-gray-400 text-lg">
                Don’t forget to leave us a rating or feedback on the <br /> app
                store so we can build better features for you.
              </p>
              <div className="w-full pt-12 flex gap-4 ml-4 lg:ml-0 ">
                <a
                  href="https://play.google.com/store/apps/details?id=com.helggscooters.android&pli=1"
                  target="_blank"
                  aria-label="Google Play Store"
                  rel="noreferrer noopener"
                >
                  <button
                    aria-label="Google Play Store"
                    className="h-12 w-full group text-black  relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-customGreen border-2 border-white hover:scale-105 hover:border-green-600  hover:shadow-3xl focus:outline-none md:w-full h-16 lg:w-52 lg:h-16"
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
                    className="h-12 text-white w-full group relative px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm rounded-full shadow-xl transition-transform transform bg-transparent border-2 border-customGreen hover:scale-105 hover:border-green-600  hover:shadow-3xl focus:outline-none md:w-full h-16 lg:w-52 lg:h-16"
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
            <div className="p-8 w-full lg:w-2/3 max-w-sm">
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
      </main>
    </>
  );
}

export default Download;
