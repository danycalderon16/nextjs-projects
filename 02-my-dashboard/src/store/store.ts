import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter/counterSlice'
import pokemonReducer  from './pokemons/pokemons'
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    pokemon:pokemonReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //   .concat(localStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector