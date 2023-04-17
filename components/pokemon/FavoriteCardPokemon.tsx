import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
    id: number
}

const FavoriteCardPokemon: FC<Props> = ({ id }) => {

    const route = useRouter();

    const onFavoriteClick =  () =>{
        route.push(`/pokemon/${id}`)
    }


    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClick}>
            <Card isHoverable isPressable css={{
                padding: 10
            }}>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt='POKEMON' width={'100%'} />
            </Card>
        </Grid>
    )
}

export default FavoriteCardPokemon