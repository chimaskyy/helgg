import { HardHat, CheckCircle } from "lucide-react";
import TrafficIcon from "@mui/icons-material/Traffic";
import LightIcon from "@mui/icons-material/Light";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import traffic from "../assets/gallery/traffic.jpeg";
import helmet from "../assets/gallery/helmet.jpg";
import light from "../assets/gallery/light.jpg";
import scooter from "../assets/banner6.jpg";

function Safety() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-customGray font-roboto">
        Safety Guidelines
      </h1>

      <p className="leading-loose mb-4 text-lg text-customGray">
        At Helgg, safety is our number one priority. Whether you&apos;re riding
        our electric bikes, scooters, or any other vehicle in our fleet, we want
        to ensure that you have a safe and enjoyable experience. Please read and
        follow our safety guidelines carefully before using our services.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl text-customGray font-semibold flex items-center">
            <HardHat className="mr-2 text-customGray" />
            Wear Protective Helmet
          </h2>
          <img
            src={helmet}
            alt="Person wearing a HardHat and protective gear"
            className="rounded-lg w-[400px] h-[400px] object-cover"
          />
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Always wear a HardHat while riding.
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Make sure your HardHat fits properly and tightly fastened.
            </li>

            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Use knee and elbow pads for additional protection
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-customGray flex items-center">
            <TrafficIcon className="mr-2 text-primary" />
            Follow Traffic Rules
          </h2>
          <img
            src={traffic}
            alt="Electric scooter and bicycle following traffic signs"
            className="rounded-lg w-[400px] h-[400px] object-cover"
          />
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Obey all traffic signs and signals
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Ride on the correct side of the road, yield to pedestrians, and
              never use your phone while riding.
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Use hand signals for turns and stops
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl text-customGray font-semibold flex items-center">
            <LightIcon className="mr-2 text-primary" />
            Be Visible and Alert
          </h2>
          <img
            src={light}
            alt="Rider with reflective gear and lights"
            className="rounded-lg w-[400px] h-[400px] object-cover"
          />
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Wear bright or reflective clothing
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Use lights during low visibility conditions
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Stay aware of your surroundings at all times
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl text-customGray font-semibold flex items-center">
            <ElectricScooterIcon className="mr-2 text-primary" />
            Maintain Your Vehicle
          </h2>
          <img
            src={scooter}
            alt="Parked scooter"
            className="rounded-lg w-[400px] h-[400px] object-cover"
          />
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Check brakes and tires before each ride
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Ensure lights and reflectors are working before each ride, inspect
              the vehicle. ride.
            </li>
            <li className="flex items-start">
              <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" />
              Report any malfunctions through our app before you ride.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4">Remember</h2>
        <p className="text-lg">
          Your safety is our top priority. Always ride responsibly and within
          your abilities. If you&apos;re new to electric scooters or bicycles,
          take time to practice in a safe area before venturing into traffic.
        </p>
      </div>
    </div>
  );
}

export default Safety;
