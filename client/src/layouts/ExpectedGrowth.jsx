import '../styles/ecofriendly.css';

const ExpectedGrowth = () => {
  return (
    <div className='mt-32 mb-24 pt-16 pb-20 w-screen flex flex-col justify-between items-center bg-[#EFF3FB] uppercase font-bold text-[#1E2F69] text-xs'>
      <h3 className='tracking-wider mb-20'>Expected Growth</h3>

      <div className='flex justify-between items-center flex-col lg:flex-row w-screen lg:w-[70%]'>
        <div className='w-full flex justify-around items-center'>
          <div className='flex flex-col items-center justify-between mb-16 lg:mb-0'>
            <span className='growth__background-overlay text-[40px] text-[#282734] mb-12 px-1 lowercase'>
              2.6x
            </span>
            <span>average growth</span>
          </div>
          <div className='flex flex-col items-center justify-between mb-16 lg:mb-0'>
            <span className='growth__background-overlay text-[40px] text-[#282734] mb-12 px-1'>
              99.6%
            </span>
            <span>customer satisfaction</span>
          </div>
        </div>
        <div className='w-full flex justify-around items-center'>
          <div className='flex flex-col items-center justify-between'>
            <span className='growth__background-overlay text-[40px] text-[#282734] mb-12 px-1'>
              15%
            </span>
            <span>daily data input</span>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <span className='growth__background-overlay text-[40px] text-[#282734] mb-12 px-1'>
              100+
            </span>
            <span>helgg employees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpectedGrowth;
