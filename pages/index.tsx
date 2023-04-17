import { Card, Grid, Row, Text } from '@nextui-org/react'
import { GetStaticProps, NextPage } from 'next'
import { Inter } from 'next/font/google'
import { pokeApi } from 'src/api'
import { Layout } from 'src/components/layouts'
import { PokemonCard } from 'src/components/pokemon'
import { PokemonListResponse, SmallPokemon } from 'src/interfaces'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons:SmallPokemon[]
}

const HomePage:NextPage<Props> = ({pokemons}) => {
  return (
    <>
    <Layout title='Listado de Pokemons'>
        <Grid.Container gap={2} justify={'flex-start'}>
          {pokemons.map(pokemon => <PokemonCard pokemon={pokemon}  key={pokemon.id}/>)}   
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) =>{
  
  const {data} =  await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] = data.results.map((pokemon,index) =>({
    ...pokemon,
      id:index + 1,
      image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));

  return{
    props:{
      pokemons
    }
  }
}

export default HomePage;
