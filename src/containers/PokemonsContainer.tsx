import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PokemonCard } from '../components/PokemonCard'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import { Pokemon, Query } from '../generated/graphql'

export const PokemonsContainer: FC = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  })

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  )
}
