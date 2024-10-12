import sponsor1 from "../assets/spons1.webp";
import sponsor2 from "../assets/spons2.png";
import sponsor3 from "../assets/spons3.jpg";
import sponsor4 from "../assets/spons4.png";
import sponsor5 from "../assets/spons5.png";

function Sponsors() {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h1 className="font-roboto text-2xl text-gray-800 font-bold mb-4 text-center pb-8">
          Helgg is trusted and supported by these reputable organizations
        </h1>
        <div className="mt-6">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
            <li className="flex-none">
              <img src={sponsor1} alt="Sponsor 1" className="w-30 h-20" />
            </li>
            <li className="flex-none">
              <img src={sponsor2} alt="Sponsor 2" className="w-30 h-20" />
            </li>
            <li className="flex-none">
              <img src={sponsor3} alt="Sponsor 3" className="w-30 h-20" />
            </li>
            <li className="flex-none">
              <img src={sponsor4} alt="Sponsor 4" className="w-30 h-20" />
            </li>
            <li className="flex-none">
              <img src={sponsor5} alt="Sponsor 4" className="w-30 h-20" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
