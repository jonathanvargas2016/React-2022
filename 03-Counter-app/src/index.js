import React from 'react'
import ReactDom from 'react-dom'
import PrimeraApp from './PrimeraApp'
//import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#app')

ReactDom.render(<PrimeraApp saludo="Hola, soy Goku" />, divRoot)
// ReactDom.render(<CounterApp value={ 10 } />, divRoot)

