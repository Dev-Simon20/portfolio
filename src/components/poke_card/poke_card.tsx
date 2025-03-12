import { typeColors } from "@/types/colors_pokemon";
import { Pokemon } from "@/types/pokemon";
import clsx from "clsx";

interface Props{
   pokemon:Pokemon,
   handleOpen:(i:number)=>void,
   idx:number
}

const PokeCard = ({ pokemon,handleOpen,idx }: Props) => {
  return (
    <section className="w-full  rounded-2xl p-4 relative  overflow-hidden bg-white isolate cursor-pointer" onClick={()=>handleOpen(idx)}>
      <p className="z-[-1] absolute top-4 left-1/2 -translate-x-1/2 text-gray-300 text-8xl text-center font-bold">
        #{pokemon.id.toString().padStart(3, "00")}
      </p>
      <div className="w-full flex justify-center">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
          className="z-50 aspect-square w-full max-w-24"
        />
      </div>
      <div className="text-gray-700 uppercase flex flex-col gap-2">
        <div className="flex w-full justify-center items-center gap-2">
          <p> #{pokemon.id.toString().padStart(3, "00")}</p>
          <p className="text-2xl font-semibold">{pokemon.name}</p>
        </div>
        <div className="flex justify-center gap-2 flex-wrap">
          {pokemon.types.map((t,i) => (
            <p className={clsx(typeColors[t.type.name],"rounded-2xl px-2 text-sm font-medium")} key={i} >{t.type.name}</p>
          ))}
        </div>
        <div className="flex justify-center gap-2 flex-wrap">
          <p className="bg-gray-200 px-2 rounded-2xl">{pokemon.weight}.M</p>
          <p className="bg-gray-200 px-2 rounded-2xl">{pokemon.height}.KG</p>
        </div>
      </div>
    </section>
  );
};

export default PokeCard;
