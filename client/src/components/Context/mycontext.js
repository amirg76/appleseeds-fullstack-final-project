import { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [navToggle, setNavToggle] = useState(true);
  const [login, setLogin] = useState(false);

  return (
    <myContext.Provider value={{ navToggle, setNavToggle, login, setLogin }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
