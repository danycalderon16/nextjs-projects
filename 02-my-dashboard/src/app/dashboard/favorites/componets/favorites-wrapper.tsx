"use client"
import { PokemonGrid, SinglePokemon } from '@/pokemons'
import { useAppSelector } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { IoHeadsetOutline, IoHeartOutline } from 'react-icons/io5'

export default function FavoritesWrapper() {
  const favoritesPokemons = useAppSelector(state=>Object.values(state.pokemon.favorites))
  const [pokemons, setPokemons] = useState(favoritesPokemons)
  
  useEffect(() => {
  setPokemons(favoritesPokemons)
  }, [favoritesPokemons])
  
  return (
    <>
    {
      pokemons.length === 0 ? <NoFavorites/> :
    // <PokemonGrid pokemons={pokemons} />
    <PokemonGrid pokemons={favoritesPokemons} />
    }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );

}