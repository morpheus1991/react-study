import React, { useEffect } from "react";
import { useState, useRef } from "react/cjs/react.development";

const PokeAPI = () => {
  const [pokeDatas, setPokeDatas] = useState([]);
  const [poke, setPoke] = useState([]);

  const addPokeIndex = useRef(0);

  const addPoke = () => {
    addPokeIndex.current++;
    if (pokeDatas.length > addPokeIndex.current) {
      setPoke([...poke, pokeDatas[addPokeIndex.current]]);
    }
  };

  useEffect(() => {
    function fetchPoke() {
      let url = "https://pokeapi.co/api/v2/type/3";
      fetch(url)
        .then((res) => res.json())
        .then((res) => setPokeDatas(res.pokemon))
        .then(console.log(pokeDatas))
        .catch(() => {
          console.log("주소를 찾을수 없습니다.");
        });
    }
    fetchPoke();

    // async function getPoke() {
    //   console.log("getpoke");
    //   const response = await fetchPoke();
    // }

    // getPoke();
  }, []);

  //   const pokeName = pokeDatas.map(
  //     (
  //       pokeData,
  //       index //id값이 존재하지 않으므로 index로 대체, but key값으로는 index사용 지양
  //     ) => (
  //       <li key={index}>
  //         <span>포켓몬 이름 : {pokeData.pokemon.name}</span> <br />
  //         <span>포켓몬 순서 : {index}</span>
  //       </li>
  //     )
  //   );

  return (
    <>
      <button
        onClick={() => {
          addPoke();
        }}
      >
        포켓몬 받아오기
      </button>
      <ul>
        {poke.map((pokeItem, i) => (
          <li key={i}>{pokeItem.pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokeAPI;
