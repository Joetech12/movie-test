import axios from 'axios';
import React, { useState } from 'react';

const Search = ({ fetchURL }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const SearchMovie = () => {
    axios.get(fetchURL).then((response) => {
      setSearchMovie(response.data.results);
    });
  };

  return (
    <div className="flex flex-col px-[28px] md:px-[67px] xl:px-[77px] mt-[56px] md:mt-[63px]">
      <p className="text-black text-[16px] md:text-[24px]">Search</p>
      <input
        type="text"
        className="ring-black ring-[2px] bg-white mt-[4px] h-[34px] md:h-[54px] p-[10px] text-[16px] md:text-[24px]"
      />
    </div>
  );
};

export default Search;
