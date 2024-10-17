/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BlogCard1 = ({ title, url, image }) => {
  return (
    <div className=''>
      <Link
        to={url}
        className='block w-[340px] h-[365px] relative overflow-hidden group rounded-[4px]'
      >
        <div className='absolute w-full h-full '></div>
        <img
          src={image}
          alt={title}
          className='absolute w-full h-full object-cover z-10 group-hover:scale-[1.1] transition-transform ease duration-700'
        />
        <article className='w-11/12 h-full flex flex-col justify-center items-center absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 z-30 font-bold'>
          <h2 className='uppercase font-bold text-xs tracking-[2px]'>
            Helgg blog
          </h2>
          <p className='font-bold leading-none my-2 text-[25px] text-center'>
            {title}
          </p>
          <div className='relative mt-2'>
            <span className='block before w-[32.72px] h-[2px] absolute -left-12 bottom-1/2 translate-y-1/2 bg-white group-hover:w-0 transition-[width] ease-in duration-150'></span>
            <p className='uppercase text-xs font-semibold group-hover:-translate-x-12 transition ease-in duration-150'>
              continue reading
            </p>
            <span className='block after absolute -right-2 bottom-1/2 translate-y-1/2 text-[0] group-hover:text-[52.72px] font-[10] overflow-hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                className='group-hover:w-[52.72px] h-[52.72px] stroke-[1] w-0'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 12h14'
                />

                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13 8l5 4-5 4'
                />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export const BlogCard2 = ({ title, time, imageUrl, url }) => {
  return (
    <div className=''>
      {/* <Link to={Blog}>Hello</Link> */}
      <Link
        to={url}
        target='_blank'
        rel='noopener noreferrer'
        className='block w-[500px] h-[400px] relative overflow-hidden group transition rounded-[4px] mb-6'
      >
        <div className='absolute w-full h-full bg-gradient-to-t from-black z-20'></div>
        <img
          src={imageUrl}
          alt={title}
          className='absolute w-full h-full object-cover z-10 transform group-hover:scale-[1.1] transition  ease duration-[2s]'
        />
        <article className='w-11/12 h-full flex flex-col justify-between items-start absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 z-30 font-bold py-6'>
          <h2 className='uppercase font-bold text-xs tracking-[2px] bg-white px-2 py-2 rounded-[4px]'>
            Helgg blog
          </h2>
          <div>
            <span className='text-white text-opacity-65 uppercase text-[11px] tracking-[2px]'>
              {time}
            </span>
            <p className='font-bold leading-none my-2 text-[31px] text-white underline group-hover:text-black transition ease-in-out duration-700'>
              {title}
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default BlogCard1;
