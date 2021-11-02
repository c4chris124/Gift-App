import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GiftGridItem } from './GiftGridItem'



export const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts(category)

    // getGifts()
    return (
        <>
            <h3 className="card animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__shakeY">Loading...</p>}
            <div className="card-grid">
                {
                    images.map((img) =>
                        <GiftGridItem
                            key={img.id}
                            {...img} />
                    )
                }
            </div>
        </>
    )
}
