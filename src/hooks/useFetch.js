import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    console.log("Use Fetch 1")
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Use Fetch 2")
        let mounted = true;        
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if (mounted) {
                    setData(response.data);
                    setLoading(false);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };
        fetchData();
        return () => {
            console.log("returned")
            mounted = false;
        };
    }, [url]);
    return { data, loading, error };


};

export default useFetch;
