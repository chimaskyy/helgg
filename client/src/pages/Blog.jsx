import BlogCard1 from "../layouts/BlogCards";
// import { BlogCard2 } from "../layouts/BlogCards";
import pic1 from "../assets/gallery/pic15.jpg";
import BlogNewsletter from "../layouts/BlogNewsletter";
import pic2 from "../assets/Images/blog_image_2.jpeg";
import pic3 from "../assets/Images/blog_image_3.jpeg";
const Blog = () => {
  const blogsList = [
    {
      id: 1,
      title:
        "How Helgg Scooters is enabling planet-friendly transport in Nigeria",
      link: "/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/",
      imageUrl: pic1,
      time: "2 years ago",
    },
    {
      id: 2,
      title:
        "How Helgg Scooters, Interna, and Enactcare won PAADCs 4.5 Million Naira Equity-Free Funding",
      link: "/how-helgg-scooters-interna-and-enactcare-won-paadcs-4-5-million-naira-equity-free-funding/",
      imageUrl: pic2,
      time: "2 years ago",
    },
    {
      id: 3,
      title: "Revolutionizing the Electric Vehicle Industry",
      link: "/revolutionalizing-the-electric-vehicle-industry/",
      imageUrl: pic3,
      time: "2 years ago",
    },
  ];

  return (
    <>
      <section className="bg-white">
        <div className="bg-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="pt-16 sm:pt-20 mb-8 sm:mb-12 max-w-7xl mx-auto">
            <h1 className="text-[#acedab] text-4xl font-body sm:text-4x font-bold">
              Our Blog
            </h1>
          </div>
          <div className="text-white pb-12 gap-4 max-w-7xl mx-auto lg:gap-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {blogsList.map((blog) => (
              <BlogCard1
                key={blog.id}
                title={blog.title}
                url={blog.link}
                image={blog.imageUrl}
              />
            ))}
          </div>
        </div>

        {/* <div className='py-[75px] grid grid-cols-2 gap-2 max-w-[1060px] mx-auto'>
        {blogsList.map(blog => (
          <BlogCard2
            key={blog.id}
            title={blog.title}
            url={blog.url}
            imageUrl={blog.imageUrl}
            time={blog.time}
          />
        ))}
      </div> */}

        <div className="bg-[#222B35] text-white py-24 pb-14">
          <BlogNewsletter />
        </div>
      </section>
    </>
  );
};

export default Blog;
