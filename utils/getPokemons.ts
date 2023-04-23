import { pokeApi } from "src/api";
import { pokemonFull } from "src/interfaces";

export const getPokemons = async (nameOrId:string)=>{
    try{
        const {data} =  await pokeApi.get<pokemonFull>(`/pokemon/${nameOrId}`);

        return {
            id:data.id,
            name:data.name,
            sprites:data.sprites
        }
    }catch(error){
        return null;
    }
}