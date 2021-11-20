
import React from 'react';
// import {useState, useEffect} from 'react';
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
 
    // useEffect(() => { //hook
    //     getGifs(category).then( imgs => setImages(imgs) ); //helper that returns a promise
    // }, [category]); //saying that if category changes (that will not), the instrucción inside useEffect will be re-runned.

    const {loading} = useFetchGifs();


    return (
        <>
            <h3> {category} </h3>
            { loading? 'Cargando': 'Data cargada' }
            {/* <div className="card-grid">
                {
                    images.map( img => (
                        // <GifGridItem key={img.id} img={img} />  //opción 1
                        <GifGridItem key={img.id} {...img} />   //opción 2 
                        ))  
                    }
            </div> */}
        </>
    )
}
