import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [ data, setDays ] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        });
    }, [url]);

    return data;
}