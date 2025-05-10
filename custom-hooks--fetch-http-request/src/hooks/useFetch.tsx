import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => {
   const [isFetching, setIsFetching] = useState(false);
   const [error, setError] = useState(null);
   const [fetchData, setFetchData] = useState(initialValue);

   useEffect(() => {
      const fetchData = async () => {
         setIsFetching(true)
         try {
            const places = await fetchFn();
            setFetchData(places)
         } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' })
         }
         setIsFetching(false);
      }
      fetchData();
   }, [fetchFn])

   return {
      isFetching,
      fetchData,
      error,
      setFetchData
   }
}

export default useFetch;