import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Seven Deadly sins'] )
    // }



    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(e => 
                        <GiftGrid 
                        key={e}
                        category={e}/>
                        )
                }
            </ol>
        </>
    )
}

