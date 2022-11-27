import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (endpoint: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(endpoint);
      setData(response.data);
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return data;
};

export default useFetch;
