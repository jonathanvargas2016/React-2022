import React from "react";
import PrimeraApp from '../PrimeraApp'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

describe('Pruebas en <PrimeraApp />', () => {
    test('debe mostrar <PrimeraApp /> correctamente', () => {

        //const wrapper = shallow(<PrimeraApp saludo="Hola, soy Gokux" />)
        const saludo = "Hola, soy Goku"
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('debe de mostrar el subtitulo enviado por props ', ()=>{
        const saludo = "Hola, soy Goku"
        const subtitulo = "Soy un subtitulo"
        const wrapper = shallow(<PrimeraApp saludo={saludo}  subtitulo={subtitulo} />)
        
        const textParrafo = wrapper.find('p').text()
        console.log("subitutlo ",textParrafo)
        expect( textParrafo).toBe(`Bienvenido ${subtitulo}`) 
    })
})