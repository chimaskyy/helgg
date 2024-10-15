import { Link } from "react-router-dom";
import helgg from "../assets/gallery/helgg1.jpeg";
import riders from "../assets/gallery/pic15.jpg";
import competition from "../assets/Images/comptition.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Widget() {
  // Blog data array
  const blogPosts = [
    {
      id: 1,
      imgSrc: riders,
      date: "2 years ago",
      title:
        "How Helgg Scooters is enabling planet-friendly transport in Nigeria",
      link: "/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/",
    },
    {
      id: 2,
      imgSrc: competition,
      date: "2 years ago",
      title:
        "How Helgg Scooters, Interna, and Enactcare won PAADCs's 4.5 Million Naira Equity-Free Funding",
      link: "#",
    },
    {
      id: 3,
      imgSrc: helgg,
      date: "2 years ago",
      title: "Revolutionizing the Electric Vehicle Industry",
      link: "#",
    },
  ];

  return (
    <section className="p-4 lg:p-24">
      <h2 className="text-4xl font-roboto text-center mb-8 text-customGray font-bold">
        Our Latest News
      </h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full bg-card rounded-lg overflow-hidden border border-green-300 md:border-blue-500 lg:border-none">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            <Link to={post.link} aria-label={post.title}>
              <div className="relative">
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0 left-0 bg-white text-green-400 text-sm p-2">
                  {post.date}
                </span>
              </div>
              <div className="pt-6">
                <h3 className="text-customGray font-bold hover:text-customBlue">
                  {post.title}
                </h3>
                <Link
                  to={post.link}
                  className="text-customGray hover:text-customBlue hover:underline mt-2 inline-block"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more &rarr;
                </Link>
              </div>
            </Link>
          </div>
        ))}
        <div className="flex justify-center items-center col-span-full">
          <button
            aria-label="View more blog posts" 
           className="transform transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse active:animate-bounce text-lg bg-customGreen font-roboto h-14 w-40 rounded-full p-4 flex items-center">
            View more
            <ChevronRightIcon className="ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
