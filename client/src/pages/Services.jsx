import ContentSection from '../layouts/imageSection';
import EcoFriendly from '../layouts/EcoFriendly';
import ExpectedGrowth from '../layouts/ExpectedGrowth';
import Eride from '../layouts/Eride';
import Wave from '../layouts/Wave';
import '../styles/ecofriendly.css';

const Services = () => {
  return (
    <main className='font-body'>
      <div className='animatedGradient flex flex-col justify-center items-center h-80 bg-customGreen text-custom-black'>
        <h1 className='font-bold text-[32px] md:text-5xl mb-12 mt-28'>
          Helgg Services
        </h1>
        <p className='font-extralight text-base md:text-lg text-center leading-5'>
          We are providing a ride sharing network of e-bicycles, electric cars
          and e-scooters.
        </p>
      </div>

      {/* Container for animated gradient */}
      <div className='animatedGradient relative'>
        <Wave />
      </div>

      {/* Image section */}
      <div className='px-2 md:px-8 lg:px-28'>
        <ContentSection />
        <EcoFriendly />
      </div>
      <ExpectedGrowth />

      <div className='px-2 md:px-8 lg:px-28'>
        <Eride />
      </div>
    </main>
  );
};

export default Services;
