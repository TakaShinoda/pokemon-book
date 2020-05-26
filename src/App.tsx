import React, { FC } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainer } from './containers/PokemonsContainer'

export const App: FC = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

  return (
    <div>
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </div>
  )
}
