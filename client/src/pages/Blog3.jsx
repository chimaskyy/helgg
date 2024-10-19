import pic8 from "../assets/gallery/helgg1.jpeg";
import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialShare from "../layouts/SocialShare";

function Blog3() {
  return (
    <div className="font-roboto bg-gray-100 min-h-screen">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            HELGG BLOG
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Revolutionizing the Electric Vehicle Industry
          </h1>
        </header>
        <div className=" max-w-none">
          <img
            src={pic8}
            width={600}
            height={100}
            className="w-full rounded-lg mb-8 h-100"
            alt="Group of people riding helgg electric scooter"
          />
        </div>
        <h1 className="text-2xl my-8">Introducing Helgg</h1>

        <p className="mb-6 text-xl text-gray-700">
          Electric vehicles (EVs) have been gaining popularity in recent years
          as consumers become more environmentally conscious and seek
          alternatives to traditional gasoline-powered vehicles. However,
          despite the growth in EV ownership, there are still many challenges
          that consumers face, such as limited charging infrastructure and high
          upfront costs. Helgg is here to change that.
        </p>
        <p className="mb-6 text-xl text-gray-700">
          One of the biggest challenges of EV ownership is finding a convenient
          place to charge your vehicle. That’s why Helgg has partnered with
          leading charging network providers to offer fast, convenient charging
          options that are easily accessible to our customers. With a network of
          thousands of charging stations across the country, Helgg customers can
          charge their vehicles quickly and easily, without worrying about
          running out of juice.
        </p>
        <p className="mb-6 text-xl text-gray-700">
          Another challenge of EV ownership is the high upfront cost. To make
          EVs more accessible, Helgg offers a range of flexible financing
          options, including leases and loans, to make it easier for customers
          to get behind the wheel of a new EV. We also offer trade-in options
          for customers who are looking to upgrade their current vehicle.
        </p>
        <p className="mb-6 text-xl text-gray-700">
          Helgg is also committed to offering the latest and greatest in
          electric vehicle technology. Our lineup of EVs features the latest
          battery technology, which provides longer ranges and faster charging
          times, so you can spend less time at the charging station and more
          time on the road. Additionally, our vehicles are equipped with
          advanced safety features, such as automated emergency braking and lane
          departure warning systems, to keep you and your passengers safe on the
          road.
        </p>
        <p className="mb-6 text-xl text-gray-700">
          Join the electric revolution with Helgg. Get behind the wheel of a new
          EV today and start experiencing the benefits of a greener, more
          sustainable future.
        </p>

        <Link to="/download" className="text-customBlue text-lg font-bold">
          {" "}
          Download our app to get started
        </Link>

        <div className="mt-6">
          <p className="text-xl font-semibold mb-2">Share on</p>
          <div className="">
            <SocialShare />
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
          <div className="mt-8 flex flex-col items-start">
            <Link to="/how-helgg-scooters-interna-and-enactcare-won-paadcs-4-5-million-naira-equity-free-funding/">
              <button
                type="button"
                size="lg"
                className="group relative flex items-center px-6 py-3 text-lg rounded-full shadow-xl transition-all duration-300 hover:bg-gray-800 hover:text-white"
              >
                <MoveLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <span>PREVIOUS ARTICLE</span>
              </button>
            </Link>

            <h2 className="mt-4 text-lg lg:text-xl font-semibold text-gray-800">
              How Helgg Scooters, Interna, and Enactcare won PAADCs 4.5 Million
            </h2>
          </div>
          <div className="mt-8 flex flex-col items-end">
            <Link to="/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/">
              <button
                type="button"
                size="lg"
                className="group relative flex items-center px-6 py-3 text-lg rounded-full shadow-xl transition-all duration-300 hover:bg-gray-800 hover:text-white"
              >
                <span>NEXT ARTICLE</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
            </Link>

            <h2 className="mt-4 text-lg lg:text-xl font-semibold text-gray-800">
              How Helgg Scootersis Enabling Planet-Friendly Transport in Nigeria
            </h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Blog3;
