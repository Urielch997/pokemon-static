import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { pokeApi } from "src/api";
import { Layout } from "src/components/layouts";
import { pokemonFull } from "src/interfaces";
import { localFavorites } from "src/utils";

interface Props {
  pokemon:pokemonFull
}

const PokemonPage:NextPage<Props> = ({pokemon}) => {
  const [isInFavorite,setInFavorite] = useState(localFavorites.existInFavorite(pokemon.id))

  const onToggleFavorite  =  () =>{
    localFavorites.toggleFavorite(pokemon.id)
    setInFavorite(!isInFavorite)

    if(isInFavorite) return 

    confetti({
      zIndex:999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:1,
        y:0
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop:'5px'}} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding:'30px'}}>
              <Card.Body>
                <Card.Image src={pokemon.sprites.other?.dream_world.front_default ||  '/no-image.svg'} alt={pokemon.name}
                 width="100%"
                 height={200}/>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header css={{display:'flex',justifyContent:'space-between'}}>
                  <Text h1 transform="capitalize">{pokemon.name}</Text>
                  <Button
                    color={'gradient'}
                    ghost={!isInFavorite}
                    onClick={onToggleFavorite}
                  >
                    {isInFavorite ? 'En favoritos': 'Guardar en favoritos'}
                  </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display="flex">
                    <Image 
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}/>

                    <Image 
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}/>

<Image 
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}/>

<Image 
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}/>
                </Container>
              </Card.Body>
              </Card>
          </Grid>
        </Grid.Container>
    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async ({params}) =>{
  const  {id} =  params as {id:string};

  const {data} =  await pokeApi.get<pokemonFull>(`/pokemon/${id}`);
  const  pokemon  = {
    id:data.id,
    name:data.name,
    sprites:data.sprites
  }
  
  return{
    props:{
      pokemon
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value,index) => `${index + 1}`);
  return {
    paths:pokemon151.map(id=>({
      params:{id}
    })),
    fallback:false
  }
}

export default PokemonPage;