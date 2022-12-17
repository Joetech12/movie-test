import axios from 'axios';

const Search = (props) => {
  return (
    <div className="flex flex-col px-[28px] md:px-[67px] xl:px-[77px] mt-[56px] md:mt-[63px]">
      <p className="text-black text-[16px] md:text-[24px]">Search</p>
      <input
        type="text"
        className="ring-black ring-[2px] bg-white mt-[4px] h-[34px] md:h-[54px] p-[10px] text-[16px] md:text-[24px]"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search for movie"
      />
    </div>
  );
};

export default Search;
