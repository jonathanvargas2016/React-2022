import CounterApp from '../CounterApp'
import React from 'react'
import { shallow } from 'enzyme'
describe('Pruebas en <CounterApp>', () => {
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const value = 100
        const wrapper = shallow(<CounterApp value={value} />)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        const valor = "100"
        const wrapper = shallow(<CounterApp value={valor}></CounterApp>)
        const valorH2 = wrapper.find('h2').text().trim()
        console.log("valor h2 ", valorH2)
        expect(valorH2).toBe(valor)
    })

})