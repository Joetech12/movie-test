import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MovieSearch from './MovieSearch';

const RowSearch = ({ title, fetchURL, rowID, movies }) => {
  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="pl-[28px] md:pl-[67px] xl:pl-[77px] ">
      <h2 className="font-normal text-[16px] md:text-[24px] md:leading-[31.25px] text-black mt-[33px] md:mt-[48px]">
        {title}
      </h2>
      <div className="relative flex items-center group mt-[26px] md:mt-[18px]">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <MovieSearch key={index} item={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default RowSearch;
