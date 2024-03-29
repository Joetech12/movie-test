import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Row from './components/Row';
import RowSearch from './components/RowSearch';
import Search from './components/Search';
import requests from './Requests';

function App() {
  const { REACT_APP_OMD_KEY } = process.env;

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=287f8761`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  console.log(searchValue);
  console.log(movies);

  return (
    <div className="pb-[50px] md:pb-[67px]">
      <Navbar />
      <Hero />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue && (
        <RowSearch
          rowID="1"
          title="Search Results"
          fetchURL={requests.requestUpComing}
          movies={movies}
        />
      )}
      <Row rowID="2" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
}

export default App;
