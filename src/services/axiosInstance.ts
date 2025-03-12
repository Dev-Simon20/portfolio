// services/axiosInstance.ts

import axios, { AxiosInstance } from 'axios';

export const pokeClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_POKE_API_URL, // Obtén la URL base desde el archivo .env
  headers: {
    'Content-Type': 'application/json',
    // Puedes añadir otros encabezados comunes aquí si es necesario
  },
});

