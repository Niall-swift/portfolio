import { createContext, useState } from "react";
import dayfoodImg from '../assets/ProjectsImg/dayfood-img.png'
import dayfoodImg1 from '../assets/ProjectsImg/dayfood-img-1.png'
import dayfoodImg2 from '../assets/ProjectsImg/dayfood-img-2.png'
import expofilmeimg from '../assets/ProjectsImg/expo-filme-img.png'
import expofilmeimg1 from '../assets/ProjectsImg/expo-filme-img-1.png'
import expofilmeimg2 from '../assets/ProjectsImg/expo-filme-img-2.png'
import avlimg from '../assets/ProjectsImg/avl-img.png'
import avlimg1 from '../assets/ProjectsImg/avl-img1.png'
import avlimg2 from '../assets/ProjectsImg/avl-img2.png'
import maisembreveimg from '../assets/ProjectsImg/maisembreve-img.png'


export const ContextG = createContext({})

function GContext({ children }) {
  const  projects = [
    {
    id:"1",
    git: "",
    sit: "https://dayfood.vercel.app/Home",
    image: `${dayfoodImg}`,
    image1: `${dayfoodImg1}`,
    image2: `${dayfoodImg2}`,
    name:"Dayfood",
    date:"Atual",
    description:"o dayfood um sistema de pedidos de comida, permitindo que os clientes façam pedidos online e que o administrador gerencie o menu de forma eficiente.",
    stacks:"JavaScript;React;Axios;Nookies;framer-motion;jquery;lodash;styled-components",
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
    id:"3",
    git: "",
    sit: "https://play.google.com/store/apps/details?id=com.niallswift.avlTelecom&pcampaignid=web_share",
    image: `${avlimg1}`,
    image1: `${avlimg}`,
    image2: `${avlimg2}`,
    name:"Avl Telecom",
    date:"20/05/24",
    description:"(AVL TELECOM foi um freelancer)  O aplicativo foi desenvolvido para que os usuários da empresa AVL consigam ver suas faturas, pagá-las solicitando 2° via e ver condição de conexão.",
    stacks:"TypeScript;ReactNative;NativeBase;Axios;NativeSwiper;ApiIXC;ApiEfyPay",
  },
  {
    id:"4",
    git: "",
    sit: "",
    image: `${maisembreveimg}`,
    image1: `${maisembreveimg}`,
    image2: `${maisembreveimg}`,
    name:"Mais em Breve",
    date:"00/00/24",
    description:"Novos projetos irão aparecer aqui. ",
    stacks:"",
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