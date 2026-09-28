import { useContext } from "react";
import { AppContext } from "../context/AppContext.context.jsx";

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext can only be used inside AppContextProvider.",
    );
  }

  return context;
};
