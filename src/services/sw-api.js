export const getAllStarships = async ()=>{
    const response = await fetch ("https://swapi.dev/api/starships")
    const data = await response.json()
    if (response.ok){
        console.log(data.results)
        return data.results
    }
}