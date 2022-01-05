import React, { useEffect, useState } from "react";
import ScrollBox from "./components/ScrollBox";

//첫번째ㅔ
function App() {
  const [poke, setPoke] = useState(null);
  const test = async () => {
    const pokeValue = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ditto"
    ).then((res) => res.json());
    console.log(pokeValue.id);
    setPoke(pokeValue.id);
  };

  // useEffect(() => {
  //   setPoke(test());
  // }, []);

  return (
    <div>
      {poke}
      <button onClick={test}>get</button>
    </div>
  );
}

export default App;
