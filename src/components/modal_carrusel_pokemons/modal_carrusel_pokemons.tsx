import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction, useState } from "react";
import { height } from "@mui/system";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import SwiperPokemons from "./swiper";
import { Pokemon } from "@/types/pokemon";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
  pokemons: Pokemon[];
  index: number;
}
export default function ModalCarruselPokemons({
  open,
  setOpen,
  handleClose,
  pokemons,
  index,
}: Props) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto max-w-[1000px] h-[100%] sm:h-auto rounded-2xl shadow outline-none ">
            <article className="w-full h-[100%]  relative ">
              <SwiperPokemons
                pokemons={pokemons}
                handleClose={handleClose}
                index={index}
              />
            </article>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
