import { ProfessorContext } from "../context/ProfessorContext";
import { useContext } from "react";

export const useProfessorContext = () => {
  const context = useContext(ProfessorContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
