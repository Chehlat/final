import { createContext, useReducer } from "react";

export const ProfessorContext = createContext();

export const professorReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROFESSORS":
      return {
        professors: action.payload,
      };
    case "CREATE_PROFESSOR":
      return {
        professors: [action.payload, ...state.professors],
      };
    case "DELETE_PROFESSOR":
      return {
        professors: state.professors.filter(
          (professor) => professor._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const ProfessorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(professorReducer, {
    professors: [],
  });

  const deleteProfessor = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/professors/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        dispatch({ type: "DELETE_PROFESSOR", payload: id });
      } else {
        console.error("Failed to delete professor");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <ProfessorContext.Provider value={{ ...state, dispatch, deleteProfessor }}>
      {children}
    </ProfessorContext.Provider>
  );
};
