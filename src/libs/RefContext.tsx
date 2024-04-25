import { useState } from "react";
import { createContext } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }: any) {
  const [dataMyNode, setDataMyNode] = useState([]);

  return (
    <RefContext.Provider
      value={
        {
          dataMyNode,
          setDataMyNode,
        } as any
      }
    >
      {children}
    </RefContext.Provider>
  );
}
