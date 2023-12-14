import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {
    return (
        <>
            <Link href={'/products/productdisplay'} prefetch={false}>
                <div className="product group w-[300px] h-fit bg-[#e3e3e333] flex-shrink-0 relative ">

                    <div className="product-image w-full h-3/4">
                        <Image
                            src={'/images/product/product-1.webp'}
                            width={500}
                            height={500}
                            alt='product'
                            className='w-full h-full object-contain object-center mix-blend-multiply'
                        />
                    </div>
                    <div className="product-details w-full h-1/4 px-6 py-5">
                        <h3 className='text-sm mb-3'>Pebble Necklace, Sterling Silver, Diamonds</h3>
                        <h4>$595</h4>
                    </div>
                    <Image
                        src={'/images/product/product-1-back.webp'}
                        width={500}
                        height={500}
                        alt='product back'
                        className='back-image h-full w-full object-cover object-center absolute top-0 left-0 z-10  opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    />

                </div>
            </Link>

        </>
    )
}

export default Product



