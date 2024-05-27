import { createContext, useState } from "react";

export const ContextG = createContext({})

function GContext({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <ContextG.Provider value={{
      // saidbar controller
      isVisible,
      setIsVisible,
      //
    }}>
      {children}
    </ContextG.Provider>
  )
}

export default GContext