import React, { useState, useEffect, useCallback } from "react";
import Form from "./components/Form";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loading from "./components/Loading";

var arr = [];
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  let fetchMovieHandler = useCallback(async function fetchMovieHandler  () {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("https://swapi.dev/api/films")
      if(!res.ok)
      {
        throw new Error('Something went wrong... retrying')
      }
    const data = await res.json();
    console.log(data)
     setMovies(data.results);
     setLoading(false)
    } catch (errror) {
      setError(errror)
    setLoading(false)
    const id = setInterval(() => {
      fetchMovieHandler();
      console.log('interval')
    }, 5000)
    arr.push(id)
    }
  }, [])

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])
  
  const stopHandler = () => {
    for(let id of arr)
    {
      console.log(id)
      clearInterval(id)
    }
  }; 
  return (
    <React.Fragment>
      <section>
      <Form></Form>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {!loading && <MoviesList movies={movies} />}
       {loading && <Loading />}
       {!loading && error && <p>{error.message}{' '}{<button onClick={stopHandler}>Stop Retrying</button>}</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
