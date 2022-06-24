import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

//`https://pokeapi.co/api/v2/pokemon
function App() {
  const [currentPageUrl, setCurrentPageUrl] = useState ('https://pokeapi.co/api/v2/pokemon')
  const [pokemon, setPokemon] = useState ([]);
  const [nextBtnUrl, setNextBtnUrl] = useState ([]);
  const [previousBtnUrl, setPreviousBtnUrl] = useState ([]);
  
  useEffect(() => {
    axios.get(currentPageUrl)
    .then(res => {
      setNextBtnUrl(res.data.next);
      setPreviousBtnUrl(res.data.previous);
      setPokemon(res.data.results);
    })
  },[])

  return (
    <div className="App">
      {pokemon.map(pokemon =>
        <pokemonList pokemon = {pokemon}/>
        )}
        <div className ="page-buttons">
          <button onClick={pagination} className="previous">previos</button>
          <button onClick={pagination} className="next">next</button>
        </div>
      
    </div>
  );
}
export default App;
