import { useEffect } from "react";
import { useState } from "react";



const useFetch = url => {

    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(url);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOutput(data);
            setLoading(false);
        })
    }, [url])

    return {output, loading};
};

export default useFetch;