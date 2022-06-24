import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
        <div className="title_right">
          <h1>{data.name}</h1>
          <h4 className={`title_type ${data.types[0].type.name}`}>{data.types[0].type.name}</h4>
        </div>
        <div className={`container_img ${data.types[0].type.name}`}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          </div>
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2 className={`stats ${data.types[0].type.name}`}>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
          {data.stats.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h4>{poke.stat.name}:{poke.base_stat}</h4>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
