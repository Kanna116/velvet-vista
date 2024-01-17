import Image from 'next/image'
import React from 'react'

const Banner = ({gender, category}) => {

    return (
        <>
            <div className='product-hero-section w-full h-[45vh] relative'>
                <Image
                    src={`/images/category/banner/${gender}/${category}.webp`}
                    fill={true}
                    alt='product section hero image'
                    className='h-full w-full object-cover '
                />
                <div className='w-full h-full absolute top-0 left-0  bg-gradient-to-b from-transparent to-[#00000099]'></div>

                <h1 className='my-10 text-3xl  absolute z-10 bottom-10 left-20 font-semibold text-white tracking-wide capitalize'>{gender}&apos;s {gender !== category ? category : ""} Collection</h1>
            </div>
        </>
    )
}

export default Banner