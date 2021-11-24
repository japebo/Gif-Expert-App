import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('Debe mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: {value}}); //el segundo argumento es el objeto evento

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);
    })
    
    test('No debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}}) //preventDefault es es objeto evento

        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change', {target:{value}});
        
        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});   

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
        // const inputValue = wrapper.find('input').prop('value');
        // expect(inputValue).toBe('');

    })
    
    
})
