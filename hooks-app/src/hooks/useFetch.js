import { useLayoutEffect, useState } from "react";

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: undefined,
        isLoading: true,
        hasError: undefined, 
    });

    useLayoutEffect(() => {
        setState(prevValue => ({...prevValue, isLoading: true}));
        fetch(url)
        .then(res => res.json())
        .then(data => setState(prevValue => ({...prevValue, data, isLoading: false})))
        .catch(err => setState({isLoading: false, data: undefined, hasError: err}))
    }, [ url ]);

    return {
        ...state
    };
};