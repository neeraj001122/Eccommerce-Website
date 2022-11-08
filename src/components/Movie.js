import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  async function deletHandler (id) {
    // const response = await fetch(`https://apiproject-b1ecd-default-rtdb.firebaseio.com/movies/${id}.json`,{
    //   method: 'DELETE',
    //   headers:{
    //     'content': 'application/json'
    //   }})
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => props.onDelete(props.id)}>Delete Item</button>
    </li>
  );
};

export default Movie;
