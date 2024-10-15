import sponsor1 from "../assets/Images/spons1.webp";
import sponsor2 from "../assets/Images/spons2.png";
import sponsor3 from "../assets/Images/spons3.jpg";
import sponsor4 from "../assets/Images/spons4.png";
import sponsor5 from "../assets/Images/spons5.png";

function Sponsors() {

  const sponsors = [
    { src: sponsor1, alt: "The Funding space" },
    { src: sponsor2, alt: "TVC Labs" },
    { src: sponsor3, alt: "Tony Elumelu Foundation" },
    { src: sponsor4, alt: "Prof Ayodele Awojobi Design Competition" },
    { src: sponsor5, alt: "The Kukar Center" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-roboto text-xl text-gray-800 font-bold mb-4 text-center pb-8 sm:mb-12 sm:text-2xl md:text-3xl lg:text-2xl">
          Helgg is trusted and supported by these reputable organizations
        </h1>
        <div className="mt-6">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <li
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={120}
                  height={80}
                  className="max-w-full h-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
