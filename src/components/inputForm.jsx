import { useState } from "react";
import PubSub from "../pubsub/pubsub";

export default function Input() {
  let [movies, setMovies] = useState("");
  let [actors, setActors] = useState("");

  function addMovies() {
    PubSub.publish("movies", movies, "moviesCount");
  }
  function addActors() {
    PubSub.publish("actors", actors);
  }

  return (
    <>
      <div>
        <label htmlFor="movieBox">Enter movie name</label>
        <input
          type="text"
          id="movieBox"
          placeholder="Enter movie name"
          onChange={(e) => setMovies(e.target.value)}
          value={movies}
        />
        <button onClick={() => addMovies()}>Add movie</button>
        <br />
        <label htmlFor="actorBox">Enter actor name</label>
        <input
          type="text"
          id="actorBox"
          placeholder="Enter actor name"
          onChange={(e) => setActors(e.target.value)}
          value={actors}
        />
        <button onClick={() => addActors()}>Add actor</button>
      </div>
    </>
  );
}
