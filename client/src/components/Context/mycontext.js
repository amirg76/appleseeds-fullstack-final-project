import { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [navToggle, setNavToggle] = useState(true);

  return (
    <myContext.Provider value={{ navToggle, setNavToggle }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
