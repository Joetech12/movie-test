import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="inline-block cursor-pointer relative">
      <img
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] block object-cover px-[6.5px] rounded-[12px]"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full  bg-black/0 hover:bg-blend-darken  hover:bg-black/0 opacity-100 text-white rounded-[12px] duration-300">
        <p className="white-space-normal text-[16px] md:text-[18px] px-[0px] leading-[23.44px]  md:leading-[31.25px] font-normal flex justify-center items-center h-full text-center truncate ">
          {item?.title}
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

export default Movie;
