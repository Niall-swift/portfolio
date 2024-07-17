import { createContext, useState } from "react";
import dayfoodImg from '../assets/ProjectsImg/dayfood-img.png'
import expofilmeimg from '../assets/ProjectsImg/expo-filme-img.png'
import expofilmeimg1 from '../assets/ProjectsImg/expo-filme-img-1.png'
import expofilmeimg2 from '../assets/ProjectsImg/expo-filme-img-2.png'


export const ContextG = createContext({})

function GContext({ children }) {
  const  projects = [
    {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"Atual",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
  {
    id:"2",
    git: "",
    sit: "",
    image: `${expofilmeimg}`,
    image1: `${expofilmeimg1}`,
    image2: `${expofilmeimg2}`,
    name:"Expo-Filme",
    date:"10/07/24",
    description:"Catálogo de Filmes, Séries e Programas de TV: Diversão na Ponta dos Dedos!",
    stacks:"TypeScript;ReactNative;NativeBase;Axios;NativeSwiper",
  },
  {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"10/07/24",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
  {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"10/07/24",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
  {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"10/07/24",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
  {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"10/07/24",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
  {
    id:"1",
    git: "",
    sit: "",
    image: `${dayfoodImg}`,
    name:"Dayfood",
    date:"10/07/24",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    tech:"",
  },
]
  return (
    <ContextG.Provider value={{
      projects
    }}>
      {children}
    </ContextG.Provider>
  )
}

export default GContext