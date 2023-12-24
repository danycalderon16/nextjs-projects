import { PokemonGrid, PokemonResponse, SinglePokemon }
 from "@/pokemons";


const getPokemons = async(limit = 20, offset = 0):Promise<SinglePokemon[]> => {
  const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res=>res.json());

    const pokemons = 
    data.results.map(pokemon=>({
      id:pokemon.url.split('/').at(-2)!,
      name:pokemon.name,
    }))

    return pokemons;
}

export default async  function PokemonsPage() {
  const pokemons = await getPokemons(151);
 
  return (
    <div className="flex flex-col">
      <span>Listado de pokemon <small>estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}