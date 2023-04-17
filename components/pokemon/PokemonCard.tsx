import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "src/interfaces"

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter();

    const onClick =  () =>{
        router.push(`/name/${pokemon.name}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{ padding: 1 }}>
                    <Card.Image src={pokemon.image} width="100%" height={140} />
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export default PokemonCard