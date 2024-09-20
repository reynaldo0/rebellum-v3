import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the context type
interface StateContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
const stateContext = createContext<StateContextType>({
  open: false,
  setOpen: () => {},
});

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider = ({ children }: StateContextProviderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <stateContext.Provider value={{ open, setOpen }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
