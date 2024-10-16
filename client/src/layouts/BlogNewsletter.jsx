import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const BlogNewsletter = () => {
  return (
    <div className='w-[550px] h-[345px] mx-auto flex flex-col justify-center items-center'>
      <div className='flex flex-col w-full'>
        <h2 className='text-[40px] text-center leading-[38px] font-bold'>
          Stay tuned with weekly newsletters.
        </h2>
        <form
          action='#'
          method='post'
          className='border-b-[1px] pb-2 mt-10 w-full flex justify-between'
        >
          <label
            htmlFor='newsletter-email'
            className='block w-full'
          >
            <input
              type='email'
              name='newsletter-email'
              id='newsletter-emai'
              required
              placeholder='Enter your email address'
              className='bg-transparent text-white border-none outline-none placeholder:text-white w-full'
            />
          </label>

          <button
            type='submit'
            className='font-bold'
          >
            Subscribe
          </button>
        </form>
        <div className='pt-8'>
          <p className='text-[#ffffff5c] text-[13px]'>
            No worries, we don&apos;t spam your inbox.
          </p>
        </div>
      </div>

      <div>
        <ul className='pt-20 flex gap-5'>
          <li className=''>
            <a
              href='https://twitter.com/helgg_'
              target='_blank'
              className='font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000'
            >
              <TwitterIcon
                style={{ fontSize: 35 }}
                className='p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000'
              />{' '}
              40+
            </a>
          </li>
          <li>
            <a
              href='https://facebook.com/helgg_'
              target='_blank'
              className='font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000'
            >
              <FacebookIcon
                style={{ fontSize: 35 }}
                className='p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000'
              />
              22k
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/helgg_'
              target='_blank'
              className='font-bold text-white hover:text-gray-500 group transition ease-in-out duration-1000'
            >
              <InstagramIcon
                style={{ fontSize: 35 }}
                className='p-2 mr-2 border rounded-full bg-transparent group-hover:text-deepAzure group-hover:bg-white group-hover:translate-x-1 transform group-hover:transition group-hover:ease-in-out group-hover:duration-1000'
              />{' '}
              22k
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogNewsletter;
