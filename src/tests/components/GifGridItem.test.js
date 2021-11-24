import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas hechas sobre el componente <GifGridItem />', () => {
    
    const title = "Un título";
    const url = "http://localhost/algo.jpg"
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('Debe retornar el componente correctamente', () => {
    
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    })
    
    test('Las propiedades src y alt de la etiqueta img deben tener tener los valores de las constantes title y url definidas en las pruebas', () => {
        const img = wrapper.find('img');
        // console.log(img.html()); //imprime en una línea la etiqueta img del html
        // console.log(img.props().src); //o
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
})
