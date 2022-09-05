import { useState } from "react";
import PubSub from "../pubsub/pubsub";

export default function Actors() {
  let [actors, setActors] = useState([]);

  function addActorsContainer(data) {
    setActors([...actors, data]);
  }
  PubSub.subscription("actors", addActorsContainer).subscribe();
  console.log("actors" + actors);

  return (
    <div className="actorsContainer">
      <h1>Actors</h1>
      <hr />
      {actors.map((item, key) => {
        return <p key={key}>{item}</p>;
      })}
    </div>
  );
}
