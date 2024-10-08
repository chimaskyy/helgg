import helgg from "../assets/helgg1.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Widget() {
  // Blog data array
  const blogPosts = [
    {
      id: 1,
      imgSrc: helgg,
      date: "2 years ago",
      title:
        "How Helgg Scooters is enabling planet-friendly transport in Nigeria",
      link: "#",
    },
    {
      id: 2,
      imgSrc: helgg,
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
    // Add more blog posts here as needed
  ];

  return (
    <section className="p-4 lg:p-24">
      <h2 className="text-3xl font-bold text-center mb-8">Our latest news</h2>
      <div
        className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full bg-card rounded-lg overflow-hidden
                      border border-green-300 md:border md:border-blue-500 lg:border-none"
      >
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              {/* Positioned date at bottom left */}
              <span className="absolute bottom-0 left-0 bg-white text-green-400 text-sm p-2">
                {post.date}
              </span>
            </div>
            <div className="pt-6">
              <h3 className="text-gray-600 font-semibold">{post.title}</h3>
              <a
                href={post.link}
                className="text-customGreen hover:underline mt-2 inline-block"
              >
                read more &rarr;
              </a>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button className="text-sm text-center bg-customGreen rounded-full p-4 mt-10 mb-8">
            View more
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
