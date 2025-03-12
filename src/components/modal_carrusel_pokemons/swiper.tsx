// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "./index.css";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
import { Pokemon } from "@/types/pokemon";
import { useEffect, useMemo, useRef, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import clsx from "clsx";
import { typeColors, typeColorsText } from "@/types/colors_pokemon";

interface Props {
  pokemons: Pokemon[];
  handleClose: () => void;
  index: number;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const shortStatPokemon = (str: string): string => {
  if (str == "hp") {
    return "HP";
  } else if (str == "attack") {
    return "ATK";
  } else if (str == "defense") {
    return "DEF";
  } else if (str == "special-attack") {
    return "SATK";
  } else if (str == "special-defense") {
    return "SDEF";
  } else if (str == "speed") {
    return "SPD";
  } else {
    return "NOT FOUND";
  }
};
export default function SwiperPokemons({
  pokemons,
  handleClose,
  index,
}: Props) {
  const isLargeScreen = useMemo(() => window.innerWidth >= 640, []);
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, [index]);

  return (
    <>
      <Swiper
        effect={isLargeScreen ? "cards" : undefined}
        grabCursor={true}
        modules={isLargeScreen ? [EffectCards] : [Navigation]}
        navigation={!isLargeScreen}
        className="h-full w-full sm:h-auto sm:w-[375px] "
        ref={swiperRef}
      >
        {pokemons.map((pokemon) => (
          <SwiperSlide
            className="bg-white !flex flex-col items-center sm:rounded-3xl"
            key={pokemon.id}
          >
            <section
              className={clsx(
                "w-full flex px-2  md:px-4 justify-between  items-center pt-2",
                typeColors[pokemon.types[0].type.name]
              )}
            >
              <div className="flex gap-4">
                <IoArrowBackCircleSharp
                  className="ml-1 w-8 h-8"
                  onClick={handleClose}
                />
                <h2 className="font-poppins uppercase font-bold text-[24px]">
                  {pokemon.name}
                </h2>
              </div>
              <p className="mr-1 ">
                {" "}
                #{pokemon.id.toString().padStart(3, "00")}
              </p>
            </section>
            <section
              className={clsx(
                "w-full h-24 sm:h-20",
                typeColors[pokemon.types[0].type.name],""
              )}
            ></section>
            <section className="w-full flex flex-col items-center relative">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                className="w-40 h-40 sm:w-32 sm:h-32 absolute   -translate-y-1/2"
                alt=""
              />
              <section className="w-full flex justify-center gap-2 flex-wrap mt-20 sm:mt-16 ">
                {pokemon.types.map((t, i) => (
                  <p
                    className={clsx(
                      typeColors[t.type.name],
                      "rounded-2xl px-2 text-sm font-medium pb-[3px]"
                    )}
                    key={i}
                  >
                    {capitalizeFirstLetter(t.type.name)}
                  </p>
                ))}
              </section>
              <section
                className={clsx("w-full flex justify-center ", {
                  "text-gray-700": pokemon.types[0].type.name === "normal",
                  "text-[#F08030]": pokemon.types[0].type.name === "fire",
                  "text-[#6890F0]": pokemon.types[0].type.name === "water",
                  "text-[#78C850]": pokemon.types[0].type.name === "grass",
                  "text-[#F8D030]": pokemon.types[0].type.name === "electric",
                  "text-[#98D8D8]": pokemon.types[0].type.name === "ice",
                  "text-[#C03028]": pokemon.types[0].type.name === "fighting",
                  "text-[#A040A0]": pokemon.types[0].type.name === "poison",
                  "text-[#E0C068]": pokemon.types[0].type.name === "ground",
                  "text-[#A890F0]": pokemon.types[0].type.name === "flying",
                  "text-[#F85888]": pokemon.types[0].type.name === "psychic",
                  "text-[#A8B820]": pokemon.types[0].type.name === "bug",
                  "text-[#B8A038]": pokemon.types[0].type.name === "rock",
                  "text-[#705898]": pokemon.types[0].type.name === "ghost",
                  "text-[#705848]": pokemon.types[0].type.name === "dark",
                  "text-[#7038F8]": pokemon.types[0].type.name === "dragon",
                  "text-[#B8B8D0]": pokemon.types[0].type.name === "steel",
                  "text-[#F0B6BC]": pokemon.types[0].type.name === "fairy",
                })}
              >
                About
              </section>
              <section className=" w-full grid grid-cols-3 text-gray-700   my-1">
                <div
                  className="w-full flex flex-col items-center justify-end  relative "
                  id="pokemon_weight"
                >
                  <p className="leading-[1.2] text-sm">{pokemon.weight} Kg</p>
                  <p className="text-xs font-semibold">Weight</p>
                </div>
                <div
                  className="w-full flex flex-col items-center justify-end  relative"
                  id="pokemon_height"
                >
                  <p className="leading-[1.2] text-sm">{pokemon.height} m</p>
                  <p className="text-xs font-semibold">Height</p>
                </div>
                <div className="w-full flex flex-col items-center justify-end ">
                  {pokemon.abilities.map((p, i) => (
                    <p className="leading-[1.2] text-sm" key={i}>
                      {p.ability.name}
                    </p>
                  ))}
                  <p className="text-xs font-semibold">Moves</p>
                </div>
              </section>
              <section className=" text-gray-700 px-4 text-justify text-sm mb-2 mt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quae molestias possimus consequatur rem! Eos eius
                officiis soluta veniam quod
              </section>
              <article className="flex flex-col items-center w-full px-4 text-gray-700 pb-2">
                <h2 className="text-base">Base Stats</h2>
                <div className="w-full flex flex-col items-cemter gap-2 mt-2">
                  {pokemon.stats.map((s, i) => (
                    <article className="flex" key={i}>
                      <section className="w-[45px] text-sm">
                        {shortStatPokemon(s.stat.name)}
                      </section>
                      <section className="w-[35px] text-sm">
                        {s.base_stat}
                      </section>

                      <section className="bg-gray-200 flex-1 rounded-3xl overflow-hidden">
                        <div
                          className={clsx(
                            {
                              "bg-gray-700":
                                pokemon.types[0].type.name === "normal",
                              "bg-[#F08030]":
                                pokemon.types[0].type.name === "fire",
                              "bg-[#6890F0]":
                                pokemon.types[0].type.name === "water",
                              "bg-[#78C850]":
                                pokemon.types[0].type.name === "grass",
                              "bg-[#F8D030]":
                                pokemon.types[0].type.name === "electric",
                              "bg-[#98D8D8]":
                                pokemon.types[0].type.name === "ice",
                              "bg-[#C03028]":
                                pokemon.types[0].type.name === "fighting",
                              "bg-[#A040A0]":
                                pokemon.types[0].type.name === "poison",
                              "bg-[#E0C068]":
                                pokemon.types[0].type.name === "ground",
                              "bg-[#A890F0]":
                                pokemon.types[0].type.name === "flying",
                              "bg-[#F85888]":
                                pokemon.types[0].type.name === "psychic",
                              "bg-[#A8B820]":
                                pokemon.types[0].type.name === "bug",
                              "bg-[#B8A038]":
                                pokemon.types[0].type.name === "rock",
                              "bg-[#705898]":
                                pokemon.types[0].type.name === "ghost",
                              "bg-[#705848]":
                                pokemon.types[0].type.name === "dark",
                              "bg-[#7038F8]":
                                pokemon.types[0].type.name === "dragon",
                              "bg-[#B8B8D0]":
                                pokemon.types[0].type.name === "steel",
                              "bg-[#F0B6BC]":
                                pokemon.types[0].type.name === "fairy",
                            },
                            "h-full "
                          )}
                          style={{ width: `${s.base_stat}%` }}
                        ></div>
                      </section>
                    </article>
                  ))}
                </div>
              </article>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
