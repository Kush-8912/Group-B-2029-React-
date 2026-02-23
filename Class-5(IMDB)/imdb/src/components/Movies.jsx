import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard.jsx";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);


  console.log(movies);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=3"
      );

      setMovies(response.data.results);
      console.log(response.data)
    }
    getData();
  }, []);

  return (
    <div>
      <Banner />
      <div className="flex flex-wrap justify-around mt-8 gap-8  ">
        {movies.map(function (movieObj) {
          return <MovieCard title={movieObj.original_title} posterUrl={movieObj.poster_path} />;
        })}

        <Pagination/>
      </div>
    </div>
  );
}

export default Movies;
