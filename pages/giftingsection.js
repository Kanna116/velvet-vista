import React from 'react'
import BigBox from './components/bigbox'

const GiftingSection = () => {

    const giftData = [
        {
            title:'Gifts for Him',
            desc:'Artisanal Details, raw stones, innovative olasps',
            image:'gifts/gift-1.webp',
        },
        {
            title:'Gifts for Her',
            desc:'Party season peices that glint and glitter',
            image:'gifts/gift-2.jpg',
        },

    ]
    return (    
        <div className="w-screen h-screen flex ">
            {giftData.map((gift, index) => <BigBox key={index} {...gift} />)}
        </div>
    )
}

export default GiftingSection