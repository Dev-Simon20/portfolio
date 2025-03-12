interface OficialArtWork{
    front_default:string
    front_shiny:string
}
interface Other{
    "official-artwork":OficialArtWork
}
interface Sprite{
    other:Other
}


interface TypePokemon{
    name:string,
    url:string
}

interface TypesPokemon{
    slot:string,
    type:TypePokemon
}

interface StatPokemon{
    name:string,
    url:string
}
interface StatsPokemon{
  base_stat:number
  stat:StatPokemon,

}
interface Ability{
    name:string,
    url:string
}
interface Abilities{
    ability:Ability
}

export interface Pokemon{
    id:number,
    name:string,
    sprites:Sprite,
    types:TypesPokemon[]
    height:number,
    weight:number,
    stats:StatsPokemon[]
    abilities:Abilities[]
}