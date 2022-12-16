import React from 'react';

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/hero_img.png)' }}
      className="w-full text-white h-[257px] md:h-[550px] flex lg:pl-[77px] lg:pt-[109px] bg-no-repeat bg-cover items-center lg:items-start justify-center lg:justify-start"
    >
      {/* <img src="/hero _img.png" alt="" className='' /> */}
      <h1 className="text-[28px] md:text-[72px] md:leading-[93.74px] leading-[36.46px] w-[278px] md:w-[500px] font-bold text-center lg:text-left">
        Watch something incredible.
      </h1>
    </div>
  );
};

export default Hero;
