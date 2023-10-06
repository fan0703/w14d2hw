import Navbar from "./components/Navbar"
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components/StarshipCard"
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [starships, setStarships] = useState([])
  // console.log(starships)
  useEffect(()=>{
    (async()=>{
      const starships = await getAllStarships()
      setStarships(starships)})()
    
},[])


// async function fetchShips(){
//   try{
//     const starships = await getAllStarships()
//     setStarships(starships)
//   }catch(error){
//     console.log("Error fetching starships:", error)
//   }
// }
// fetchShips()
//   },[])

//   Promise.all([getAllStarships()])
//   .then((values)=>values)
//   .then((data)=> setStarships(data[0]?.response?.data?.results))
// },[])


  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      width: "50%",
      margin: "auto",
    }}>
     <Navbar />
     <div className="cardContainer">
     {starships.map((ship, i ) =>{
      return <StarshipCard ship={ship} key={i} />
     })}
     </div>
    </div>
  );
}

export default App;
