import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Pokemon, Attack } from '../generated/graphql'

const useStyle = makeStyles(() =>
  createStyles({
    main: {
      textAlign: 'center',
    },
    image: {
      marginLeft: '1%',
      marginRight: '1%',
      padding: '30px',
      minHeight: '300px',
    }
  })
)

export const PokemonCard: FC<Pokemon | any> = ({ pokemon }) => {
  const classes = useStyle()
  return (
    <div>
      <p>{pokemon.number}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.maxHP}</p>
      <p>{pokemon.maxCP}</p>
      <img className={classes.image} src={pokemon.image} alt={pokemon.name} />
      <p>
        {pokemon.attacks.special.slice(0, 3).map((attack: Attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </p>
    </div>
  )
}
