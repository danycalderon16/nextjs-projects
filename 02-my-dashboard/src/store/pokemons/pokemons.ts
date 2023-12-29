import { SinglePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { retry } from '@reduxjs/toolkit/query';

interface PokemosState{
  favorites:{ [key: string]: SinglePokemon},
}

const getInitialState = ():PokemosState =>{
  const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
  return favorites;
}

const initialState:PokemosState = {
  // ...getInitialState()
  favorites:{},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavorite(state, action:PayloadAction<{[key:string]:SinglePokemon}>){
      state.favorites = action.payload;
    },
    toggleFavorite(state, action:PayloadAction<SinglePokemon>){
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state.favorites[id]){                
        delete state.favorites[id]
        return
      }else{ 
        state.favorites[id] = pokemon
      }

      localStorage.setItem('favorites-pokemons',JSON.stringify(state.favorites))
    }
  }
});

export const {toggleFavorite,setFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer