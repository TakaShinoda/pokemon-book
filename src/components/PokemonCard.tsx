import React, { FC } from 'react'
import { Pokemon, Attack } from '../generated/graphql'

export const PokemonCard: FC<Pokemon | any> = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.number}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.maxHP}</p>
      <p>{pokemon.maxCP}</p>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>
        {pokemon.attacks.special.slice(0, 3).map((attack: Attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </p>
    </div>
  )
}
