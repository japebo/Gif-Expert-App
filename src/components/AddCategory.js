import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value); //e.target.value contiene el valor tras ocurrir el evento de presion de una tecla.
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita que se recargue la página, que es el comportamiento por defecto tras el evento.

        if (inputValue.trim().length > 2) {
            setCategories( cats => [...cats, inputValue]); //opción preferida, que es usando un callback function, pues setCategories tiene acceso al esatdo actual de las 'categories', accesible en este caso a través del argumento 'cats' que pasa la propia función.
            // setCategories( [...categories, inputValue]); //una alternativa a la línea de arriba es esta, que hace lo mismo. Para usarla habría que pasarle la propiedad 'categories' (o el nombre que se desee, solo debemos asegurarnos de que coincidan el nombre de las propiedad pasada y el argumento que se desestructura luego en el functional component AddCategory) al llamado al componente AddCategory dentro del componente GifExpertApp (de esta forma: <AddCategory setCategories={setCategories} categories={categories}/>); además de desestructurar la nueva propiedad que es pasada de un componente a otro, llamada categories probablemente (de esta forma: export const AddCategory = ( { categories, setCategories  } ) => {...}). 
            setInputValue('');
        };
        // console.log('Submit hecho');
    };

    return (
        <form onSubmit = {handleSubmit}>
           <input
                type="text"
                value={ inputValue }
                onChange = {handleInputChange}
           /> 
        </form>
    )
}
