import {createContext, useContext, useState} from "react"

export const Context = createContext(null)

export function ContextProvider({children}){
  let [open, setOpen] = useState(false)
  return (
    <Context.Provider value={[open, setOpen]}>
      {children}
    </Context.Provider>
  );
}
