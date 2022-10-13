import React, { useState ,useEffect} from "react";
import axios from "axios";
export default function useGetApi(url) {
  const [state, setState] = useState();
  const getApi = async () => {
    try {
      const result = await axios({
        url,
        method: "GET",
      });

      setState(result.data.content);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return state;
}
