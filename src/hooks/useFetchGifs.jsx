import { useState, useEffect } from "react";
import { getGifs } from "../helper/getGifs";

export const useFetchGifs = (item) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(item).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [item]);

  return state;
};
