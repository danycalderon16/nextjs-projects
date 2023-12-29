"use client"
import { PokemonGrid, SinglePokemon } from '@/pokemons'
import { useAppSelector } from '@/store/store'
import React from 'react'

export default function FavoritesWrapper() {
  const pokemonsState = useAppSelector(state=>state.pokemon);
 
  const pokemons:SinglePokemon[] = 
  Object.values(pokemonsState).map(pokemon=>pokemon)

  
  return (
    <PokemonGrid pokemons={pokemons} />
  )
}
