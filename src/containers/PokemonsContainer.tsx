import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PokemonCard } from '../components/PokemonCard'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import { Pokemon } from '../generated/graphql'

export const PokemonsContainer: FC = () => {
  const [num, setNum] = useState(9)
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: num },
  })

  return (
    <div className="container">
      <button onClick={() => setNum((prevNum) => (prevNum + 9))}>more</button>
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  )
}
