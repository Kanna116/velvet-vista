import React from 'react'
import BigBox from '../components/bigbox'

const CollectionSection = () => {
    const collectionData = [
        {
            title: 'Spear Collection',
            desc: 'Our house motif arrives streamlined across a series of slender flex chokers and cuffs, finished with diamonds.',
            image: 'collection/collection-1.webp',
            link:'/pages/women/Bracelets',
        },
        {
            title: 'Icon Collection',
            desc: 'A labor of love, our heritage chain takes four hours to weave just one inch.',
            image: 'collection/collection-2.webp',
            link:'/pages/men/Bracelets',
        },

    ]
    return (
        <div className="w-screen h-screen flex ">
            {collectionData.map((collection, index) => <BigBox key={index} {...collection} />)}
        </div>
    )
}

export default CollectionSection
