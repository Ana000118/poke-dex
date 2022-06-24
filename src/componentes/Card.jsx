import React from "react";

const Card = ({pokemon, loading, infoPokemon}) => {
  return (
    <>
      {
      loading ? 
        <h1>Loading...</h1> : 
        pokemon.map((item) => {
          return (
            <>
            <div className="animation">
              <div className={`card ${item.types[0].type.name}`} key={item.id} onClick={() =>infoPokemon(item)}>
                <img src={item.sprites.front_default} alt="" />
                <h2 className="espacio"></h2>
                <h2>{item.name}</h2><br />
                <h5>{item.types[0].type.name}</h5>
                <h2>{item.id}</h2>
              </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}
export default Card;
