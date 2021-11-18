
import React, {useState, useEffect} from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0); //usado para comprobar la necesidad del hook useEffect. En este caso si no usamos el nuevo hook, cada vez que presionamos el botón +1 se ejecutaría nuevamente la petición fetch HTTP, y esto no es necesario.

    //Para evitarlo, y hacer que se ejecute una unicamente una vez cuando el componente es renderizado por 1ra vez

    
    const getGifs = async () => {
        
        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+y+morty&limit=10&api_key=ruKxqzVdhxchaOgAAYOTeDgvB3MMBtVT';
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gif = data.map( img => { //en la constante gif hay un arreglo de 10 objetos. cada uno contiene 3 propiedades.
            return { 
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url 
            };
        });
        console.log(gif);
        // console.log(data);
    }
    
    useEffect(() => {
    getGifs();
    }, [])
    
    return (
        <>
            <h3> {count} </h3>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <h3> {category} </h3>
        </>
    )
}
