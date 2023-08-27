import React from "react";

type Props = {
  children: React.ReactNode;
}

export type ContextType = {
  currPage: string;
  setCurrPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<ContextType | null>(null);
export const ContextProvider = ({ children } : Props) => {
  const [currPage, setCurrPage] = React.useState<string>('Home');

  const memoizedContextValue = React.useMemo(() => ({
    currPage, setCurrPage
  }), [currPage, setCurrPage]);

  return(
    <Context.Provider value={memoizedContextValue}> { children } </Context.Provider>
  )
};

export const useMyContext = () => {
  const context = React.useContext(Context);
  if(!context) {
    throw new Error("Tabs context error");
  }
  return context;
}
