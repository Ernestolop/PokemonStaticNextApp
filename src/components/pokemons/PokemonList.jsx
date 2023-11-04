import React from 'react'
import { PokemonCard } from '.'

const PokemonList = ({pokemons}) => {
  return (
    <>
    {
        pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))
    }
    </>
  )
}

export default PokemonList;