import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault() // prevenir el comportamiento por defecto. refresh del navegador
        console.log('submit hecho')

        if (inputValue.trim().length > 2) {
            // setCategories(cats => [inputValue, ...cats ])
            onNewCategory(inputValue.trim())
            setInputValue('')
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Buscar Gifts' value={inputValue} onChange={handleInputChange} />

        </form>

    )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
