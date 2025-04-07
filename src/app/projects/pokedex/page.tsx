"use client";
import { pokeButtons } from "@/libs/pokedex/pokeButtons";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { pokeClient } from "@/services/axiosInstance";
import { Pokemon } from "@/types/pokemon";
import PokeCard from "@/components/poke_card/poke_card";
import ModalCarruselPokemons from "@/components/modal_carrusel_pokemons/modal_carrusel_pokemons";
import { Skeleton } from "@mui/material";
import { typeColors } from "@/types/colors_pokemon";

export default function PokePage() {
  const sk = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [typePokemon, setTypePokemon] = useState<string>("all");
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [pokemosBackUp, setPokemonsBackup] = useState<Pokemon[]>();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const handleOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const callPokemons = async () => {
    const pokes: Pokemon[] = [];
    for (let i = 1; i <= 40; i++) {
      try {
        const data = await pokeClient.get(`/api/v2/pokemon/${i}`);

        pokes.push(data.data);
      } catch (error) {
      }
    }
    setPokemons(pokes);
    setPokemonsBackup(pokes);
  };
  useEffect(() => {
    callPokemons();
  }, []);

  useEffect(() => {
    if (pokemosBackUp) {

      let pok: Pokemon[] = [...pokemosBackUp];
      if (typePokemon === "all") {
        setPokemons(pok);
      } else {
        pok = pok.filter((pokemon) => {
          const arrayTipos: string[] = pokemon.types.map((p) => p.type.name);
          return arrayTipos.some((t) => t.includes(typePokemon));
        });
        setPokemons(pok);
      }
    }
  }, [typePokemon]);

  return (
    <>
      <div className="z-[-1] absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-r from-blue-500/30 to-transparent blur-3xl opacity-50"></div>

      <article className="w-full max-w-[1000px] grid grid-cols-3 sm:-grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-4 mt-8 md:mt-16  px-2 md:px-0">
        {pokeButtons.map((p) => (
          <section
            className={clsx(
              "cursor-pointer",
              typeColors[p.type],
              "rounded px-2 py-1 flex-1 text-center  select-none"
            )}
            key={p.id}
            onClick={() => setTypePokemon(p.type)}
          >
            {p.name}
          </section>
        ))}
      </article>
      {pokemons && (
        <article className="w-full grid grid-cols-1  sm:grid-cols-3   max-w-[1000px] gap-4 my-8 px-2 md:px-0">
          {pokemons.map((p, i) => (
            <PokeCard pokemon={p} key={p.id} handleOpen={handleOpen} idx={i} />
          ))}
        </article>
      )}
      {!pokemons && (
        <article className="w-full grid grid-cols-1  sm:grid-cols-3     max-w-[1000px] gap-4  my-8  px-2 md:px-0">
          {sk.map((s, i: number) => (
            <Skeleton className="w-full min-h-40 " variant="rounded" key={i} />
          ))}
        </article>
      )}
      {pokemons && (
        <ModalCarruselPokemons
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
          pokemons={pokemons}
          index={index}
        />
      )}
    </>
  );
}
