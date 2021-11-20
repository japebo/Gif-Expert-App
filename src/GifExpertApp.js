import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () => {
    //     // categories.push('HunterXHunter'); //no sirve para nuestro propósito de agregar un nuevo elemento al array que sea renderizable, lo que hace es agregar un nuevo elemento al objeto array, pero sin actualizarlo en el Hook useState. 
    //     // setCategories('HunterXHunter'); //tampoco sirve de esta forma pues lo que hace es sobreescribir "categories" con un elemento de tipo string.
    //     setCategories([...categories, 'HunterXHunter']); //opción 1 (utilizando el operador spread)
    //     // setCategories( () => [...categories, 'HunterXHunter']); //opción 2
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/> 
            <hr/>
            <ol>
                {
                    categories.map( category => ( 
                        // return <li key={category}> {category} </li>; //'key' debe ser único, porque será la forma de referirnos a un elemento específico. NOTA: no se debe usar el índice que proporciona el segundo argumento de la función map (que en este caso se omite, porque no se necesita).
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}