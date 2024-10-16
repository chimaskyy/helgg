// import { useState } from 'react';
import BlogCard1 from '../layouts/BlogCards';
import { BlogCard2 } from '../layouts/BlogCards';
import BlogNewsletter from '../layouts/BlogNewsletter';

const Blog = () => {
  const blogsList = [
    {
      id: 1,
      title:
        'How Helgg Scooters is enabling planet-friendly transport in Nigeria',
      url: 'https://helgg.com/blog/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/',
      imageUrl: 'src/assets/images/blog_image_1.webp',
      time: '2 years ago',
    },
    {
      id: 2,
      title:
        'How Helgg Scooters, Interna, and Enactcare won PAADCs 4.5 Million Naira Equity-Free Funding',
      url: 'https://helgg.com/blog/how-helgg-scooters-interna-and-enactcare-won-paadcs-4.5million-naira-equity-free-funding',
      imageUrl: 'src/assets/images/blog_image_2.jpeg',
      time: '2 years ago',
    },
    {
      id: 3,
      title: 'Revolutionizing the Electric Vehicle Industry',
      url: 'https://helgg.com/blog/revolutionizing-the-electric-vehicle-industry',
      imageUrl: 'src/assets/images/blog_image_3.jpeg',
      time: '2 years ago',
    },
  ];

  // const [blogs, setBlogs] = useState(blogsList);

  return (
    <>
      <div className='bg-deepAzure h-screen'>
        <div className='pt-20 mb-12 max-w-[1060px] mx-auto'>
          <h1 className='text-[#acedab] text-4xl font-body font-bold'>
            Our Blog
          </h1>
        </div>
        <div className='text-white max-w-[1060px] mx-auto flex gap-2'>
          {blogsList.map(blog => (
            <BlogCard1
              key={blog.id}
              title={blog.title}
              url={blog.url}
              imageUrl={blog.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className='py-[75px] grid grid-cols-2 gap-2 max-w-[1060px] mx-auto'>
        {blogsList.map(blog => (
          <BlogCard2
            key={blog.id}
            title={blog.title}
            url={blog.url}
            imageUrl={blog.imageUrl}
            time={blog.time}
          />
        ))}
      </div>

      <div className='bg-[#222B35] text-white pt-16 pb-14'>
        <BlogNewsletter />
      </div>
    </>
  );
};

export default Blog;
