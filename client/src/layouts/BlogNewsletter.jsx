import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const BlogNewsletter = () => {
  return (
    <div className='w-full max-w-2xl mx-auto px-4 py-8 sm:py-12 md:py-16"'>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold leading-tight mb-8">
          Stay tuned with weekly newsletters.
        </h2>
        <form action="#" method="post" className="w-full max-w-md mb-8">
          <div className="flex flex-row sm:flex-row items-center border-b border-white pb-2">
            <label htmlFor="newsletter-email" className="block w-full">
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-emai"
                required
                placeholder="Enter your email address"
                className="bg-transparent text-white placeholder-white w-full mb-4 sm:mb-0 sm:mr-4 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="font-bold text-white hover:text-gray-300 transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div className="pt-8">
          <p className="text-white text-opacity-40 text-sm mb-12">
            No worries, we don&apos;t spam your inbox.
          </p>
        </div>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center gap-6">
          <li className="">
            <a
              href="https://twitter.com/helgg_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000"
            >
              <TwitterIcon
                style={{ fontSize: 35 }}
                className="p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000"
              />{" "}
              40+
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/helgg_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000"
            >
              <FacebookIcon
                style={{ fontSize: 35 }}
                className="p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000"
              />
              22k
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/helgg_"
              target="_blank"
              className="font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000"
            >
              <InstagramIcon
                style={{ fontSize: 35 }}
                rel="noopener noreferrer"
                className="p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000"
              />{" "}
              22k
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogNewsletter;
