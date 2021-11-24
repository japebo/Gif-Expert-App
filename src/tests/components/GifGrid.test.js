import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //crea un mock del custom hook (función) para mimificarla y por ejemplo fingir que retornó valores que se definen aquí mismo en la sección de pruebas

describe('Pruebas en <GifGrid />', () => {
    const category = 'Sponge Bob';

    test('Debe hacer match con el Snapshot', () => {
        useFetchGifs.mockReturnValue({ 
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();        
    })
    
    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa' 
        }];

        useFetchGifs.mockReturnValue({ //fingiendo que el custom hook useFetchGifs retornó estos valores para poder tener un snapshot con estos valores
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/>); //renderización del componente
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); //para comprobar que la cantidad de componentes que se están renderizando sea igual a la cantidad de objetos que retorna el helper getGifs() en el array
    })
})
