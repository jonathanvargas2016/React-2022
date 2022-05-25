import React, {useState} from 'react'

export const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball'])
    
    const handleAdd = () =>{

        //setCategories([...categories, 'naruto'])
        setCategories(cats => [...cats, 'Naruto'])

    }
    return (
        <>
            <h2>GifExpectApp</h2>
            <hr />
            {/* <button className='btn-add' type='button' onClick={handleAdd}>Agregar</button> */}
            <button className='btn-add' type='button' onClick={() => handleAdd()}>Agregar</button>
            <ol>
                {
                    categories.map((category)=>{
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}
