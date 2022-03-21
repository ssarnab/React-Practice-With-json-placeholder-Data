import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // const controller = new AbortController();
        // const signal = controller.signal;
        let mounted = true;
        axios
            .get(url)
            .then(function (response) {
                if(mounted){
                    setData(response.data);
                    setLoading(false);
                    setError(null);
                }
            })
            .catch(function (error) {
     
                setError(error.message);
                setLoading(false);
                
            })
            .then(function () { });

            return () => {
                mounted = false;
            };
    }, [url]);

    return { data, loading, error };
};
export default useFetch;
