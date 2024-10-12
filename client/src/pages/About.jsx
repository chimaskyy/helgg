import helgg1 from "../assets/helgg1.jpeg";
import team from "../assets/Images/team.png";
import team1 from "../assets/Images/team2.png";
import team2 from "../assets/Images/team3.png";
import team3 from "../assets/Images/team4.png";
import team4 from "../assets/Images/team5.jpeg";
import Johnson from "../assets/Images/team6.png";
import Rhoda from "../assets/Images/Group-2.png";
import Ore from "../assets/Images/group3.png";
import Paul from "../assets/Images/group4.jpg";
import { MoveDown } from "lucide-react";
// import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import { Link } from "react-router-dom";
import riders from "../assets/gallery/pic15.jpg";

const sects = "m-4 p-4";
const para = "text-xl text-gray-800 font-extrabold mb-8 pt-8";
const head = "text-3xl font-bold mb-8 text-gray-800";
function About() {
  return (
    <>
      <main>
        <section className={`mt-24 relative ${sects} `}>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-12">
            {/* Text Section */}
            <div className="flex-1 mb-8 lg:mb-0">
              <p className={para}>About Helgg</p>
              <h1 className={`${head} lg:text-7xl mt-4`}>
                Helgg
                <p>isn&apos;t just a company, it&apos;s an experience</p>
              </h1>
              <a href="#our-story">
                <div className="text-extrabold flex items-center space-x-2">
                  <MoveDown
                    style={{
                      fontSize: 60,
                      height: 60,
                      fontWeight: "bold",
                      color: "black",
                    }}
                  />
                  <p className="mb-8">
                    Scroll Down <br /> to Explore
                  </p>
                </div>
              </a>
            </div>
            <div className="relative flex-1 mt-32">
              <div className="animate-bounce">
                <img
                  src={helgg1}
                  alt="A customer riding a Helgg scooter"
                  className="rounded-2xl lg:max-w-md h-full"
                />
                <p className="text-sm font-extrabold tracking-widest absolute lg:-left-56 lg:top-1/2 transform lg:-rotate-90 lg:text-xl text-customGreen origin-bottom">
                  HELGG EXPERIENCE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Nav */}
        <nav className="mt-8 hidden lg:block pl-6 sticky top-[80px] bg-white text-gray-800 font-bold z-20">
          <ul className="flex space-x-8 py-6">
            <li className="cursor-pointer relative group">
              <a href="#our-story">Our Story</a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#values">Values</a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#leadership">Leadership</a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#careers">Careers</a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>

        <section className={`${sects} `} id="our-story">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-2">
            <div className="hidden lg:flex lg:w-10% items-center lg:mr-6 mt-24">
              <h2 className="text-3xl font-extrabold mr-4">01</h2>
              <hr className="border-t-2 border-gray-400 w-24" />
            </div>

            <div className="flex flex-col lg:flex-row lg:w-90% justify-between items-center lg:items-start lg:gap-12 bg-gray-200 rounded-3xl w-full lg:p-12">
              <div className="w-full lg:w-7/10 p-6 ">
                <p className={para}>Our Story</p>
                <h1 className={`${head} lg:text-5xl`}>
                  We go way back, as far as 2019...
                </h1>
                <p className="pb-4 text-lg text-gray-700">
                  Helgg Scooters LTD embarked on its thrilling adventure back in
                  2019 when three spirited undergraduates from Covenant
                  University set foot in the electrifying realm of Silicon
                  Valley, California for the Enactus World Cup. Little did they
                  know that their encounter with Bird&apos;s electric scooters
                  would ignite an unstoppable wave of inspiration and passion
                  within them. And just like that, Helgg Inc was born—a
                  visionary company with a mission to disrupt and digitize the
                  African transportation sector by introducing eco-friendly,
                  low-carbon waste electric vehicles that cater to the needs of
                  Africa&apos;s ever-growing population. Imagine this: a dynamic
                  network of electric vehicles crisscrossing the continent,
                  turning heads and leaving a greener footprint in their wake.
                  So, buckle up and join us on this incredible journey.
                  Together, we can create a future where getting from point A to
                  point B is a safe and liberating experience.
                </p>
              </div>

              {/* Image section with more space */}
              <div className="w-full lg:w-3/10 p-6 lg:mt-64">
                <img src={team} alt="Helgg team" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 pb-18 mb-8 rounded-b-3xl" id="values">
          <div className="m-8">
            <div className="flex flex-col lg:flex-row lg:w-50% items-center lg:items-start lg:gap-8">
              {/* Number and line div */}
              <div className="hidden lg:flex lg:w-[10%] items-center lg:mr-6 mt-6">
                <h2 className="text-3xl font-extrabold mr-4">02</h2>
                <hr className="border-t-2 border-gray-400 w-24" />
              </div>

              {/* Text and heading div */}
              <div className="lg:w-[70%] text-left">
                <p className={para}>Values</p>
                <h1 className={`${head} lg:text-6xl lg:max-w-lg`}>
                  We are more than transportation
                </h1>
                <p className="mt-6 mb-8 text-lg lg:text-xl text-gray-700 lg:max-w-lg">
                  Our values are the tenets that our leaders <br /> have
                  cultivated that now connect and hold <br /> us together as a
                  company.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
              <div className="rounded-3xl">
                <img src={team1} alt="" className="rounded-t-3xl" />
                <div className="lg:hidden bg-white rounded-b-3xl">
                  <h1 className="p-8 text-customBlue text-2xl">
                    Sustainability
                  </h1>
                  <p className="p-8 text-black">
                    We are deeply committed to a greener future through
                    eco-friendly travel. We strive to promote sustainable
                    practices and minimize our carbon footprint, forging a path
                    towards a more environmentally conscious world.
                  </p>
                </div>
              </div>

              {/* Second Value Card */}
              <div className="rounded-3xl">
                <img src={team2} alt="" className="rounded-t-3xl" />
                <div className="lg:hidden bg-white rounded-b-3xl">
                  <h1 className="p-8 text-customBlue text-2xl">Innovation</h1>
                  <p className="p-8 text-lg text-gray-700">
                    Our commitment to innovation drives us to redefine the
                    travel experience. We constantly seek out new technologies
                    and creative solutions to enhance your journey, making it
                    more thrilling, convenient, and extraordinary.
                  </p>
                </div>
              </div>

              {/* Third Value Card */}
              <div className="rounded-3xl pb-8">
                <img src={team3} alt="" className="rounded-t-3xl" />
                <div className="lg:hidden bg-white rounded-b-3xl">
                  <h1 className="p-8 text-customBlue text-2xl">Safety</h1>
                  <p className="p-8  text-lg text-gray-700">
                    Safety is not just a priority; it&apos;s the cornerstone of
                    our commitment to you. We hold ourselves accountable to the
                    highest standards of safety, ensuring that we go the extra
                    mile to ensure secure and reliable transportation, giving
                    you peace of mind with every ride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img
              src={riders}
              alt=""
              className="hidden lg:block w-[1721px] h-[560px] p-0 m-0  object-cover"
            />
          </div>
        </section>

        <section className="m-6 pt-12" id="leadership">
          <div className="mt-24 flex flex-col lg:flex-row items-center lg:items-start lg:gap-2">
            <div className="hidden lg:flex lg:w-10% items-center lg:mr-6 mt-24">
              <h2 className="text-3xl font-extrabold mr-4">03</h2>
              <hr className="border-t-2 border-gray-400 w-24" />
            </div>
            <div className="bg-gray-200 rounded-3xl p-8 lg:p-24 lg:w-full">
              <p className={para}>Leadership</p>
              <h1 className={`${head} lg:text-6xl lg:max-w-lg`}>
                It starts at <br /> the top
              </h1>
              <p>
                Helgg Inc would not be where it is today <br /> without our
                leaders
              </p>
            </div>
          </div>

          <div>
            <p className="text-center text-4xl p-12 lg:mt-12 font-bold">
              Our Amazing Team
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 lg:m-24 gap-6">
              {/* Team Member 1 */}
              <div className="relative">
                <img
                  src={Johnson}
                  alt="Jaiyeola Johnson"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="relative mx-4 -mt-6 h-30 overflow-hidden rounded-xl bg-white shadow-xl flex flex-col justify-center">
                  <h1 className="pt-4 text-center text-lg font-semibold">
                    Jaiyeola Johnson
                  </h1>
                  <p className="text-center pb-4">CEO/Co-Founder</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="relative">
                <img
                  src={Rhoda}
                  alt="Rhoda Orovwiriri"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="relative mx-4 -mt-6 h-30 overflow-hidden rounded-xl bg-white shadow-xl flex flex-col justify-center">
                  <h1 className="pt-4 text-center text-lg font-semibold">
                    Rhoda Orovwiriri
                  </h1>
                  <p className="text-center pb-4">Co-Founder/Finance</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="relative">
                <img
                  src={Ore}
                  alt="Oluwafemi Oreoluwa"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="relative mx-4 -mt-6 h-30 overflow-hidden rounded-xl bg-white shadow-xl flex flex-col justify-center">
                  <h1 className="pt-4 text-lg text-center font-semibold">
                    Oluwafemi Oreoluwa
                  </h1>
                  <p className="text-center pb-4">Co-Founder/Engineering</p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="relative">
                <img
                  src={Paul}
                  alt="Paul Jaiyeola"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <div className="relative mx-4 -mt-6 h-30 overflow-hidden rounded-xl bg-white shadow-xl flex flex-col justify-center">
                  <h1 className="pt-4 text-center text-lg font-semibold">
                    Paul Jaiyeola
                  </h1>
                  <p className="text-center pb-4">Co-Founder/Operation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`mb-12 rounded-3xl ${sects}`} id="careers">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-2">
            <div className="hidden lg:flex lg:w-10% items-center lg:mr-6 mt-24">
              <h2 className="text-3xl font-extrabold mr-4">04</h2>
              <hr className="border-t-2 border-gray-400 w-24" />
            </div>
            <div className="flex flex-col lg:flex-row lg:w-90% justify-between items-center lg:items-start lg:gap-12 bg-gray-200 rounded-3xl w-full lg:p-12">
              <div className="w-full lg:w-2/5 p-6">
                <p className={para}>Careers</p>
                <h1 className={`${head} lg:text-5xl`}>
                  Join us today at Helgg Inc.
                </h1>
                <p className="mt-6 mb-8 text-lg text-gray-700">
                  Ready to make a difference in African transportation?
                  We&apos;re searching for like-minded individuals who share our
                  passion for shaking things up. Join our team of experts and
                  let&apos;s collaborate to change the status quo together.
                  Exciting opportunities await!
                </p>
                <Link to="/career">
                  <button className="font-extrabold m-6 w-[200px] bg-customGreen h-[60px] my-3 flex items-center justify-center rounded-xl cursor-pointer  overflow-hidden transition-all t shadow-md  hover:shadow-lg hover:bg-white">
                    See Job openings
                  </button>
                </Link>
              </div>

              <div className="w-full lg:w-3/5 p-6 lg:mt-52">
                <img src={team4} alt="Helgg team" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
