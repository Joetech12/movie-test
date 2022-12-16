import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './Requests';

function App() {
  return (
    <div className="pb-[50px] md:pb-[67px]">
      <Navbar />
      <Hero />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpComing} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Up Coming" fetchURL={requests.requestUpComing} />
    </div>
  );
}

export default App;
