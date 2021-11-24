import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => { //this is a custom hook

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { 
        getGifs(category).then( imgs => setState({
                data: imgs,
                loading: false    
            }) ); //helper that returns a promise
    }, [category]); //saying that if category changes (that will not), the instrucción inside useEffect will be re-runned.
    // en el hook de arriba, la función del primer argumento no puede ser async, porque espera algo síncrono    

    return state;
}