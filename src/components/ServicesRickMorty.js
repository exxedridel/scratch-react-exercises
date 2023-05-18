// Imprimir en el dom numero de paginas de personajes, nombre, vivo? y planeta de Rick Sanchez data la API
// let API = 'https://rickandmortyapi.com/api/character/';
// Agregar un boton que permita cambiar el nombre y planeta a un personaje random

import React, { useEffect, useState } from "react";

let API = "https://rickandmortyapi.com/api/character/";

function ServicesRickMorty() {
  const [characters, setCharacters] = useState();
  const [charData, setCharData] = useState({
    id: "randomId",
    image: "randomImg",
    name: "randomName",
    status: "someState",
    planet: "randomPlanet",
  });

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.info.count);
        console.log(data.results[0].name);
        setCharData({
          id: data.results[0].id,
          image: data.results[0].image,
          name: data.results[0].name,
          status: data.results[0].status,
          planet: data.results[0].origin.name,
        });
      });
  }, []);

  function handleClick() {
    const maxCharCount = characters;
    const randomCharId = Math.floor(Math.random() * maxCharCount) + 1;
    console.log(`${API}${randomCharId}`);
    fetch(`${API}${randomCharId}`)
      .then((res) => res.json())
      .then((data) =>
        setCharData({
          id: data.id,
          image: data.image,
          name: data.name,
          status: data.status,
          planet: data.origin.name,
        })
      );
  }

  return (
    <>
      <div>Number of character: {charData.id}/{characters}</div>
      <div><img src={charData.image} alt="Rick and Morty character"/></div>
      <div>Name: {charData.name}</div>
      <div>Status: {charData.status}</div>
      <div>Planet: {charData.planet}</div>
      <button onClick={handleClick}>Random Character</button>
    </>
  );
}

export default ServicesRickMorty;
