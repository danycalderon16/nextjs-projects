import { SinglePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { retry } from '@reduxjs/toolkit/query';

interface PokemosState{
  [key: string]: SinglePokemon,
}

const initialState:PokemosState = {
  '1': {id:'1', name:'bulbasor'},
  '2': {id:'2', name:'Pickachu'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action:PayloadAction<SinglePokemon>){
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state[id]){                
        delete state[id]
        return
      }

      state[id] = pokemon
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer