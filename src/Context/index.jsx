import { createContext, useState } from "react";
import dayfoodImg from '../assets/ProjectsImg/dayfood-img.png'

export const ContextG = createContext({})

function GContext({ children }) {
  const  projects = [
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
    id:"2",
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