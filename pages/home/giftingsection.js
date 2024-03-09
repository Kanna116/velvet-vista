import React from 'react'
import BigBox from '../components/bigbox'

const GiftingSection = () => {

    const giftData = [
        {
            title:'Gifts for Him',
            desc:'Artisanal Details, raw stones, innovative olasps',
            image:'gifts/gift-1.webp',
            link:'/pages/men',
        },
        {
            title:'Gifts for Her',
            desc:'Party season peices that glint and glitter',
            image:'gifts/gift-2.jpg',
            link:'/pages/women',
        },

    ]
    return (    
        <div className="w-screen min-h-screen flex lg:flex-row md:flex-row flex-col ">
            {giftData.map((gift, index) => <BigBox key={index} {...gift} />)}
        </div>
    )
}

export default GiftingSection