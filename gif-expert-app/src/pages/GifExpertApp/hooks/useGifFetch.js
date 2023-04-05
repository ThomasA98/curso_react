import { useState } from "react";
import { useEffect } from "react";

const api_key = '';
const limit = 5;
const api = 'https://api.giphy.com/v1/gifs/search';

export const useGifFetch = ( gifToSerch ) => {

    const [ gifs, setGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {

        fetch(`${api}?api_key=${api_key}&q=${gifToSerch}&limit=${limit}`)
        .then(res => res.json())
        .then(({ data }) => data.map(d => ({
            id: d.id,
            title: d.title,
            img_ref: d.images.downsized_medium.url
        })))
        .then(listGifsA => {
            setGifs(listGifsA);
            setIsLoading(false);
        })
        .catch(e => console.error(e));

    }, [gifToSerch]);

    return {
        gifs,
        isLoading
    };
};