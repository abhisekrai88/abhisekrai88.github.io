import React, {useEffect, useState} from "react";

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f1aa96c6000627d41a4be22c2f6a46ec&page=1";
const IMG_API =  "https://image.tmdb.org/t/p/w1280";
const SEARCH_API= "https://api.themoviedb.org/3/search/movie?&api_key=f1aa96c6000627d41a4be22c2f6a46ec&query=";

function App (){
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) =>{
      console.log(data);
      setMovies(data.results);
    });
  };
  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
    setSearchTerm ('');
  }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value); 
  }
  return(<>
  <h1>Movie Database</h1>
    <header>
      
    <form onSubmit={handleOnSubmit}>
    <input className="search" 
      type="search" 
      placeholder="Search..."
      value={searchTerm}
      onChange={handleOnChange}
      />
    </form>
    
  </header> 
    <div className="movie-container">
      {movies.length > 0 && movies.map(function (movie) {
          return <Movie key={movie.id} {...movie} />;
        })
       }
    </div>
    </>);
  }
  

export default App;