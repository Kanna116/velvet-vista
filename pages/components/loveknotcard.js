import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoveknotCard = () => {
    return (
        <>
            <div className="directbuy w-[20vw] h-32 absolute bottom-10 left-10 z-40 bg-white flex items-center opacity-0 transition-all duration-300">
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