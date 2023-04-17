import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import FavoriteCardPokemon from './FavoriteCardPokemon'

interface Props {
    favoritesPokemon: number[]
}

export const FavoritePokemon: FC<Props> = ({ favoritesPokemon }) => {
    return (
        <Grid.Container gap={2} direction="row" justify='flex-start'>
            {
                favoritesPokemon.map(id => (
                    <FavoriteCardPokemon id={id} key={id} />
                ))
            }
        </Grid.Container>
    )
}
