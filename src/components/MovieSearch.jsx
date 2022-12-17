import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieSearch = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="inline-block cursor-pointer relative">
      <img
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] block object-cover px-[6.5px] rounded-[12px]"
        src={item?.Poster}
        alt=''
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-black/0 hover:bg-blend-darken  hover:bg-black/50 opacity-100 text-white rounded-[12px] transition-all duration-300">
        <p className="white-space-normal text-[16px] md:text-[18px] px-[0px] leading-[23.44px]  md:leading-[31.25px] font-normal flex justify-center items-center h-full text-center truncate ">
          ''
        </p>
        <p
          onClick={() => {
            setLike(!like);
          }}
        ></p>
      </div>
    </div>
  );
};

export default MovieSearch;
