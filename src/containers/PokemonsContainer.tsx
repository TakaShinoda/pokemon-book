import React, { FC, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import { PokemonCard } from '../components/PokemonCard'
import { GET_POKEMONS } from '../graphql/get-pokemon'
import { Pokemon } from '../generated/graphql'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '90%',
      textAlign: 'center',
      marginTop: '2%',
      padding: '20px',
    }
  })
)

export const PokemonsContainer: FC = () => {
  const [num, setNum] = useState(9)
  const classes = useStyle()
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: num },
  })

  return (
    <>
      <button onClick={() => setNum((prevNum) => prevNum + 9)}>more</button>
      <div className={classes.root}>
        {pokemons &&
          pokemons.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </>
  )
}
