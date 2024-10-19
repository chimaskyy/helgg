import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/ecofriendly.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Locations = () => {
  return (
    <div className="px-4 sm:px-6 lg:pl-28 py-10 lg:py-0 flex flex-col lg:flex-row justify-between items-center min-h-screen ">
      <div className="w-full lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Where do you want <br className="hidden sm:inline" />
          <span className="growth__background-overlay inline-block relative before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-1 before:h-3 before:bg-green-300 before:-z-10">
            Helgg
          </span>{" "}
          to be next?
        </h1>
      </div>
      <div className="w-full lg:w-3/5 h-64 sm:h-80 lg:h-full relative">
        <div className="w-full h-full flex justify-center items-center">
          <Player
            src="https://lottie.host/f6e8cf0f-ff7e-4e73-9ad4-3a6e515a5b5e/WM6Zxxcjuu.json"
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
      </div>
    </div>
  );
};
export default Locations;
