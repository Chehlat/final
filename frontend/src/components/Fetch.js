import React, { useState, useEffect } from "react";
import { useProfessorContext } from "../hooks/useProfessorContext";

const FetchData = ({ url, children }) => {
  const [localData, setLocalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dispatch } = useProfessorContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLocalData(data);
        setLoading(false);
        if (response.ok) {
          dispatch({ type: "SET_PROFESSORS", payload: data });
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, dispatch]);

  return children({ data: localData, loading, error });
};
export default FetchData;
