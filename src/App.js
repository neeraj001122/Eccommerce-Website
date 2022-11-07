import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loading from "./components/Loading";

var arr = [];
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  async function fetchMovieHandler  () {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("https://swapi.dev/api/film")
        if(!res.ok)
        {
          throw new Error('Something went wrong... retrying')
        }
      const data = await res.json();
       setMovies(data.results);
      } catch (errror) {
      setLoading(false)
      const id = setInterval(() => {
        fetchMovieHandler();
      }, 5000)
      arr.push(id)
    }
  }
  const stopHandler = () => {
    for(let id of arr)
    {
      console.log(id)
      clearInterval(id)
    }
  }; 
  console.log(arr)
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
      <button onClick={stopHandler}>Stop Retrying</button>
       {!loading && <MoviesList movies={movies} />}
       {!loading && error && <p>{error}</p>}
       {loading && <Loading />}
      </section>
    </React.Fragment>
  );
}

export default App;
