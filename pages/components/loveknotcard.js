import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoveknotCard = () => {
    return (
        <>
            <div className="directbuy lg:w-[20vw] md:w-[20vw] w-[80vw] h-32 absolute bottom-10 lg:left-10 md:left-10 left-1/2 -translate-x-1/2 lg:-translate-x-0 md:-translate-x-0 z-40 bg-white flex items-center lg:opacity-0 md:opacity-0 opacity-100 transition-all duration-300 overflow-hidden">
                <Link href={'/pages/products/1'} className='flex items-center' >
                    <Image
                        src={'/images/loveknot/loveknot-3.webp'}
                        width={500}
                        height={500}
                        alt='love knot'
                        className='h-full w-2/5 object-cover '
                    />
                    <div className='px-5'>
                        <h3 className='font-secondary text-sm'>Love Knot Ring, Sterling Silver, 2.5MM</h3>
                        <p>$395</p>
                    </div>

                </Link>
            </div>
        </>
    )
}

export default LoveknotCard