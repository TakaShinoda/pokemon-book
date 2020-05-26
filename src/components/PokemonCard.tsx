import React, { FC } from 'react'
import { Pokemon } from '../generated/graphql'

export const PokemonCard: FC<Pokemon | any> = ({pokemon}) => {
  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.maxHP}</p>
      <p>{pokemon.maxCP}</p>
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  )
}
