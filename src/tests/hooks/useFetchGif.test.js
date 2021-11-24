import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGif', () => {
    test('Debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'))
        const { data, loading } = result.current;
        // console.log(data, loading);
        
        await waitForNextUpdate(); //para evitar el error de: no se puede hacer una actualización de estado de React en un componente desmontado.

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    })
    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch'));
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    })
      
})
