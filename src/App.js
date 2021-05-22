/** @format */

import "./App.css";
import Row from "./components/Row";
import requests from "./request";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"  

const App = () => {
  const categories = [
    {
      title: "Trending Now",
      fetchURL: requests.fetchTrending,
    },
    {
      title: "Top Rated",
      fetchURL: requests.fetchTopRated,
    },
    {
      title: "Action Movies",
      fetchURL: requests.fetchActionMovies,
    },
    {
      title: "Comedy Movies",
      fetchURL: requests.fetchComedyMovies,
    },
    {
      title: "Horror Movies",
      fetchURL: requests.fecthHorrorMovies,
    },

    {
      title: "Romance Movies",
      fetchURL: requests.fetchRomanceMovies,
    },
    {
      title: "Documentaries",
      fetchURL: requests.fetchDocumentaries,
    },
  ];

  const renderedMovieRows = categories.map(({ title, fetchURL }, index) => (
    <Row title={title} fetchURL={fetchURL} key={index} />
  ));

  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      {renderedMovieRows}
    </div>
  );
};

export default App;
