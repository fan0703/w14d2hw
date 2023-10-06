import React from "react";

export default function StarshipCard(ship) {
    const loaded = ()=>{

    
  return (
    <div className="StarshipCard">
      <ul>{ship.name}</ul>

    </div>
  );
}
const loading = ()=>{
    return <h1>No Star Wars to show</h1>
}
return ship ? loaded(): loading()
}