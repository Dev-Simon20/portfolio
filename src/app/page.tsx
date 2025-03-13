"use client";
import LightBeam from "@/components/light_beam/light_beam";
import intro from "@/pics/intro-bg.jpg";
export default function Home() {
  return (
    <article className="flex flex-col items-center w-ful ">
      <section className="w-full grid grid-cols-2  h-screen  ">
        <div className=" flex items-center flex-col justify-center font-dm_sans">
          <p className="text-8xl">Simón.</p>
          <p className="text-4xl">Dev</p>
        </div>
        <div className=" relative flex items-center justify-start">
          <div className="bg-zinc-800 w-128 pt-8 pr-8 pb-8 pl-2">
            <img src={intro.src} alt="" />
          </div>
        </div>
        <LightBeam/>
      </section>
      <section className="font-sm_sans my-16 w-96 p-4 flex flex-col items-center bg-zinc-800 rounded-3xl">
        <h1 className="text-3xl">
          Soy <span className="text-blue-600 ">Simón,</span>
        </h1>
        <h2 className="text-3xl">Ingeniéro de Sistemas</h2>
        <br />
        <p className="text-center">
          Este es mi portafolio realizado con Next.js. Aquí podrás ver los
          proyectos que he realizado y en los que he participado.
        </p>
        <p>¡Espero que te guste!</p>
        <div className="flex  w-full justify-between px-8 mt-2">
          <div className="px-2 pt-1 bg-blue-600 rounded cursor-pointer">
            Ver proyectos
          </div>
          <div className="px-2 pt-1 pb-1.5 outline rounded cursor-pointer outline-[1px]">
            Descargar CV
          </div>
        </div>
      </section>
    </article>
  );
}
