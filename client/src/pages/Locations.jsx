import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '../styles/ecofriendly.css';

const Locations = () => {
  return (
    <div className='px-1 lg:px-8 pt-10 lg:pt-0 flex flex-col lg:flex-row justify-between items-center h-screen lg:h-96'>
      <div className='w-2/5 lg:text-[36px] font-bold flex justify-center items-center'>
        <h1>
          Where do you want <br />
          <span className='growth__background-overlay lg:text-[36px] max-w-max before:bottom-1 inline-block'>
            Helgg
          </span>{' '}
          to be next?
        </h1>
      </div>
      {/* <div className=''>Image goes here</div> */}
      <div className='w-3/5 h-full relative'>
        <div className='w-full absolute top-0'>
          <DotLottieReact
            src='https://lottie.host/f6e8cf0f-ff7e-4e73-9ad4-3a6e515a5b5e/WM6Zxxcjuu.json'
            className='w-full relative'
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
