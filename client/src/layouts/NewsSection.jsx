import { Link } from "react-router-dom";
import helgg from "../assets/gallery/helgg1.jpeg";
import riders from "../assets/gallery/pic15.jpg";
import competition from "../assets/Images/comptition.jpeg";
import { ChevronRight } from "lucide-react";

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
      link: "/how-helgg-scooters-interna-and-enactcare-won-paadcs-4-5-million-naira-equity-free-funding/",
    },
    {
      id: 3,
      imgSrc: helgg,
      date: "2 years ago",
      title: "Revolutionizing the Electric Vehicle Industry",
      link: "/revolutionizing-the-electric-vehicle-industry/",
    },
  ];

  return (
    <section className="p-4 lg:p-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Our Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link to={post.link} aria-label={post.title} className="block">
              <div className="relative aspect-video">
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0 left-0 bg-white text-green-600 text-xs md:text-sm font-semibold px-3 py-1">
                  {post.date}
                </span>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-customBlue transition-colors">
                  {post.title}
                </h3>
                <span className="text-blue-600 hover:underline inline-flex items-center">
                  Read more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          aria-label="View more blog posts"
          className="bg-customGreen  font-bold py-3 px-6 rounded-full inline-flex items-center transition-all duration-300 hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          View more
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
