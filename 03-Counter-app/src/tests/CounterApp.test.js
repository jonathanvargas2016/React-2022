import CounterApp from '../CounterApp'
import React from 'react'
import { shallow } from 'enzyme'

describe('Pruebas en <CounterApp>', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(() => {
        wrapper = shallow(<CounterApp />)
    })

    test('debe mostrar <PrimeraApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}></CounterApp>)
        const valorH2 = wrapper.find('h2').text().trim()
        console.log("valor h2 ", valorH2)
        expect(valorH2).toBe("100")
    })

    test('debe de incrementar con el boton +1', () => {

        const btn = wrapper.find('button').at(0)
        btn.simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('11')

    })
    test('debe de disminuir con el boton -1', () => {

        const btn = wrapper.find('button').at(2)
        btn.simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('9')

    })

    test('Debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105}></CounterApp>)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()

        wrapper.find('button').at(1).simulate('click')
        expect(counterText).toBe('105')

    })

})