import { useState, useEffect } from "react";
import { axios } from "axios";

const useFetch = ({ endpoint, query }) => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '51c2c56dc5msh55d530580fe0743p128630jsnf60e8bd32481',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },

    };

    const fetchData = async () => {
        setisLoading(true);
        try {
            const response = await axios.request(options);
            setdata(response.data.data);
            setisLoading(false);
        } catch (error) {
            seterror(error);
            alert('An error occured');
        }
        finally {
            setisLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch }

}

export default useFetch;