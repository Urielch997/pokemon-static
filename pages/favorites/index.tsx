import { useEffect, useState } from 'react'
import { Layout } from 'src/components/layouts'
import { FavoritePokemon } from 'src/components/pokemon'
import { NoFavorite } from 'src/components/ui'
import { localFavorites } from 'src/utils'

const index = () => {
  const [favoritesPokemon, setfavoritesPokemon] = useState<number[]>([])

  useEffect(() => {
    setfavoritesPokemon(localFavorites.pokemons());
  }, [])


  return (
    <Layout title='Pokemons favoritos'>
      {
        favoritesPokemon.length === 0 ?
          <NoFavorite /> :
          <FavoritePokemon favoritesPokemon={favoritesPokemon} />
      }

    </Layout>
  )
}

export default index