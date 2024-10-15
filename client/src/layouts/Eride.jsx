import electricCar from "../assets/gallery/electric_car.png";
import electricScooter from "../assets/gallery/electric_scooter.jpeg";
import gradientDivider from "../assets/gradient-divider.svg";
import "../styles/ecofriendly.css";

const Eride = () => {
  return (
    <>
      <section className="px-5 py-8 lg:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-32">
          <div className="w-full lg:w-1/2">
            <img
              src={gradientDivider}
              alt=""
              width={80}
              height={10}
              className="mb-10"
            />
            <h2 className="text-4xl font-bold vietnam__font text-custom-black">
              E-Ride
            </h2>
            <h2 className="text-4xl font-bold vietnam__font for__background-clip">
              the future of urban <br /> transportation.
            </h2>

            <div className="mt-10 lg:w-[490px] text-[17px] leading-[22px] font-medium text-custom-gray">
              <p>
                Get ready for an electrifying adventure with our fleet of
                electric cars! Designed to make your ride convenient, efficient,
                and environmentally friendly, our cars are equipped with
                state-of-the-art electric motors that offer smooth, quiet and
                instant acceleration.
              </p>
              <p className="my-8">
                But that&apos;s not all! Our advanced battery technology ensures
                a range of up to 150 km on a single charge, giving you the
                freedom to explore without worrying about running out of power.
                And inside, you&apos;ll find cutting-edge features like
                navigation, climate control, and entertainment systems to make
                your ride comfortable and enjoyable.
              </p>
              <p>
                Join the E-Ride community and be part of the future of
                transportation today! With hourly, daily, weekly, and monthly
                rental options available for individuals and families, you can
                reduce your carbon footprint and contribute to improving air
                quality in the city. Don&apos;t miss out on the excitement of
                the electric revolution – join us now!
              </p>
            </div>

            <div className="my-12 text-[22px] text-custom-black vietnam__font">
              <p>
                <span className="font-bold text-[#3c4b62]">
                  Estimated Fleet Worldwide by 2035
                </span>
              </p>
              <p>
                524,000{" "}
                <span className="font-bold text-[#3c4b62]">E-bikes,</span>
              </p>
              <p>
                7,000,000{" "}
                <span className="font-bold text-[#3c4b62]">Electric Cars,</span>{" "}
                and
              </p>
              <p>
                75,000{" "}
                <span className="font-bold text-[#3c4b62]">
                  Electric scooters
                </span>
              </p>
            </div>
          </div>
          <div className="w-full mt-48 lg:w-1/2">
            <img
              src={electricCar}
              alt="Photo of a bicycle"
              width={512}
              height={464}
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">
          <div className="w-full mt-48 lg:w-1/2 order-2 lg:order-1">
            <img
              src={electricScooter}
              alt="Photo of a bicycle"
              width={512}
              height={464}
            />
          </div>
          <div className="pt-14">
            <img
              src={gradientDivider}
              alt=""
              width={80}
              height={10}
              className="mb-10"
            />
            <h2 className="text-4xl font-bold vietnam__font text-custom-black">
              Eco Friendly
            </h2>
            <h2 className="text-4xl font-bold vietnam__font for__background-clip">
              Electric Scooters
            </h2>

            <div className="mt-10 lg:w-[490px] text-[17px] leading-[22px] font-medium text-custom-gray">
              <p>
                Introducing our Electric Scooters: the game-changing,
                eco-friendly ride you&apos;ve been waiting for! Effortless
                acceleration, sleek design, and zero emissions make them the
                perfect choice for navigating the city in style.
              </p>
              <p className="my-8">
                Equipped with a powerful electric motor, they offer effortless
                acceleration and easy manoeuvrability. With a top speed of 30
                km/h and a whopping 50 km range, you&apos;ll breeze through your
                day with ease. Say goodbye to traffic jams and hello to a
                greener, more exhilarating way of getting around.
              </p>
              <p>
                Join us today and experience the thrill of electric mobility
                while reducing your carbon footprint. Daily, weekly, or monthly
                rentals are available for individuals, families, and
                corporations. Let&apos;s electrify the streets together!
              </p>
            </div>

            <div className="my-12 text-[22px] text-custom-black vietnam__font">
              <p>
                <span className="font-bold text-[#3c4b62]">
                  Mileage on Single Charge:{" "}
                </span>
                40km
              </p>
              <p>
                <span className="font-bold text-[#3c4b62]">
                  Weight Capacity:{" "}
                </span>
                95kg
              </p>
              <p>
                <span className="font-bold text-[#3c4b62]">Type: </span>{" "}
                Electric
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eride;
