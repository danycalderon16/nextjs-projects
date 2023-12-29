"use client"
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { setFavorite } from './pokemons/pokemons'

interface Props {
  children: React.ReactNode
}

export const Providers = ({children}:Props) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
   store.dispatch(setFavorite(favorites))
  }, [])
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}