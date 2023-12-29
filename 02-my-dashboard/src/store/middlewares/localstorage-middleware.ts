import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const localStorageMiddleware = (state:MiddlewareAPI) => {
  return (next:Dispatch) =>(action:Action) => {
    next(action);
   
    if(action.type === "pokemons/toggleFavorite"){
      const {pokemon} = state.getState() as RootState;
      localStorage.setItem('favorites-pokemons',JSON.stringify(pokemon))
      return;
    }
  }
}