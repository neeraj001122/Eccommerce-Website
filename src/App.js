import React, { useState, useEffect, useCallback } from "react";
import Form from "./components/Form";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loading from "./components/Loading";

var arr = [];
function App(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [render, setRender] = useState(false)
  const [movies, setMovies] = useState([])


  


  let fetchMovieHandler = useCallback(async function fetchMovieHandler  () {
    setLoading(true)  
    setError(null)
    try {
      const res = await fetch("https://apiproject-b1ecd-default-rtdb.firebaseio.com/movies.json")
      if(!res.ok)
      {
        throw new Error('Something went wrong... retrying')
      }
    const data = await res.json();
    const loadedMovies = [];
    for(const key in data)
    {
       loadedMovies.push({
        id:key,
        title:data[key].tital,
        releaseDate:data[key].realiseDate,
        openingText:data[key].Opening
       })
    }
    setMovies(loadedMovies)
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
  }, [fetchMovieHandler, render])

  const deleteHandler = async (id) => {
    setRender(false)
      const response = await fetch(`https://apiproject-b1ecd-default-rtdb.firebaseio.com/movies/${id}.json`,{
        method: 'DELETE',
        headers:{
          'content': 'application/json'
        }})
        setRender(true)
  };
  
  const stopHandler = () => {
    for(let id of arr)
    {
      console.log(id)
      clearInterval(id)
    }
  }; 
  async function moviess(movies){
    setRender(false)
    const response = await fetch('https://apiproject-b1ecd-default-rtdb.firebaseio.com/movies.json',{
      method: 'POST',
      body:JSON.stringify(movies),
      headers:{
        'content': 'application/json'
      }
    })
    const data = await response.json();

    setRender(true)
 }
  return (
    <React.Fragment>
      <section>
      <Form transfer={moviess}></Form>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
       {!loading && <MoviesList movies={movies}  onDelete={deleteHandler}/>}
       {loading && <Loading />}
       {!loading && error && <p>{error.message}{' '}{<button onClick={stopHandler}>Stop Retrying</button>}</p> }
      </section>
    </React.Fragment>
  );
}

export default App;
