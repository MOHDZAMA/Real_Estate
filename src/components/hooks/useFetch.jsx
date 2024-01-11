import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../../utils/api";
const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url, params)
      .then((res) => {
        setLoading(false);
        setData(res);
        console.log("url", url);
        console.log("params", params);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!" + err);
      });
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;
