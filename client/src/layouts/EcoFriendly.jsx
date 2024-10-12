import bicycle from '../assets/electric_bicycle.png';
import gradientDivider from '../assets/gradient-divider.svg';
import '../styles/ecofriendly.css';

const EcoFriendly = () => {
  return (
    <>
    <main>
      <div className='px-5 lg:pt-32 lg:ml-16 flex flex-col-reverse lg:flex-col'>
      <div className=''>
        <img
          src={bicycle}
          alt='Photo of a bicycle'
          width={512}
          height={464}
        />
      </div>
      <div className='pt-14'>
        <img
          src={gradientDivider}
          alt=''
          width={80}
          height={10}
          className='mb-10'
        />
        <h2 className='text-4xl font-bold text-custom-black'>Eco Friendly</h2>
        <h2 className='text-4xl font-bold for__background-clip'>
          Electric Bicycles
        </h2>

        <div className='mt-10 lg:w-[490px] text-[17px] leading-[22px] font-medium text-custom-gray'>
          <p>
            Unveiling e-Bikes—a thrilling revolution in sustainable
            transportation! Similar to the prince Aostirmotor e-bike by on our
            evstore, or electric bicycles are the ultimate solution for
            eco-friendly and convenient city travel. With a powerful electric
            motor, tackling hills and headwinds become a breeze while you pedal.
          </p>
          <p className='my-8'>
            Zoom through the streets at a top speed of 20 km/h and enjoy an
            impressive range of up to 50 km on a single charge. These
            lightweight bikes are easy to manoeuvre, making them perfect for
            city commuting.
          </p>
          <p>
            By choosing Eco Bikes, you&apos;re not only reducing your carbon
            footprint but also embracing a healthier, more active lifestyle.
            Whether you&apos;re looking for a daily, weekly, or monthly rental
            option, we have you covered. So why not join the Eco Bikes community
            and experience the freedom of electric biking today? It&apos;s time
            to take the first step towards a more sustainable future! On the
            left is Aostirmotor e-bike, visit the ev-store if you&apos;d like to
            purchase one.
          </p>
        </div>

        <div className='my-12 text-[22px] text-custom-black'>
          <p>
            <span className='font-bold text-[#3c4b62]'>
              Mileage on Single Charge:{' '}
            </span>
            40km
          </p>
          <p>
            <span className='font-bold text-[#3c4b62]'>Weight Capacity: </span>
            95kg
          </p>
          <p>
            <span className='font-bold text-[#3c4b62]'>Type: </span> Electric
          </p>
        </div>
      </div>
    </div>
    </main>
    </>
    
  );
};

export default EcoFriendly;
