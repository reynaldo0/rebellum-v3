/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface StateContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

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

  return (
    <stateContext.Provider value={{ open, setOpen }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
