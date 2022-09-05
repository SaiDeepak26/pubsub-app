import { useState, useEffect } from "react";
import PubSub from "../pubsub/pubsub";
// import { addMoviesContainer } from "../functions/global.functions";
import "../App.css";

export default function Movies() {
  let [movies, setMovies] = useState([]);
  function addMoviesContainer(data) {
    setMovies([...movies, data]);
  }

  PubSub.subscription("movies", addMoviesContainer).subscribe();

  return (
    <div className="moviesContainer">
      <h1>Movies</h1>
      <hr />
      {movies.map((item, key) => {
        return <p key={key}>{item}</p>;
      })}
    </div>
  );
}
