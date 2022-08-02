import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball'])

    const handleAdd = (newCategory) => {
        setCategories([newCategory, ...categories])
        // setCategories(cats => [...cats, 'Naruto'])

    }
    return (
        <>
            <h2>GifExpectApp</h2>

            {/* <AddCategory setCategories={setCategories}></AddCategory> */}

            <AddCategory onNewCategory={handleAdd} />

            <hr />
            {/* <button className='btn-add' type='button' onClick={handleAdd}>Agregar</button> */}
            {/* <button className='btn-add' type='button' onClick={() => handleAdd()}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) => <GifGrid key={category} category={category}></GifGrid>)
                }
            </ol>
        </>
    )
}
