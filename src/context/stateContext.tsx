import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

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

export const StateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Open:", open);
  }, [open]);

  return (
    <stateContext.Provider value={{ open, setOpen }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
