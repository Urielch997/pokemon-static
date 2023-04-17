const toggleFavorite = (id:number) =>{
    console.log("toggleFavorite llamado")

    let favorites:number[] =  JSON.parse(localStorage.getItem("favorites") || "[]")

    if(favorites.includes(id)){
        favorites = favorites.filter(pokemon => pokemon  !== id)
    }else{
        favorites.push(id);
    }

    localStorage.setItem("favorites",JSON.stringify(favorites));
}

const  existInFavorite  =  (id:number):boolean =>{
    if(typeof window === 'undefined') return  false;
    
    let favorites:number[] =  JSON.parse(localStorage.getItem("favorites") || "[]")
    return favorites.includes(id);
}

const pokemons = ():number[] =>{
    return JSON.parse(localStorage.getItem("favorites") || "[]")
}

export default {
    toggleFavorite,
    existInFavorite,
    pokemons
}