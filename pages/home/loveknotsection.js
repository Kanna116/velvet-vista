import Image from 'next/image'
import React from 'react'
import LoveknotCard from '../components/loveknotcard'
import Link from 'next/link'

const LoveKnotSection = () => {
    return (
        <div className='w-full h-[140vh] flex'>
            <div className="left w-1/2 h-full flex items-end ">
                <div className="image-container overflow-hidden w-4/5 h-4/6 relative [&>.directbuy]:hover:opacity-100">
                    <Image
                        src={'/images/loveknot/loveknot-1.webp'}
                        width={500}
                        height={500}
                        alt='love knot'
                        className='w-full h-full  object-cover hover:scale-110 transition-all duration-300'
                    />
                    <LoveknotCard />
                </div>
            </div>
            <div className="right w-1/2 h-full flex flex-col items-end justify-between">
                <div className="image-container overflow-hidden mt-10  w-4/5 h-4/6 relative [&>.directbuy]:hover:opacity-100">
                    <Image
                        src={'/images/loveknot/loveknot-2.webp'}
                        width={500}
                        height={500}
                        alt='love knot'
                        className='w-full h-full  object-cover hover:scale-110 transition-all duration-300'
                    />
                    {/*  */}
                    <LoveknotCard />
                </div>
                <div className="text-container w-1/2 flex flex-col items-start justify-between gap-5 px-10 py-20 self-start">
                    <h3 className='text-xl font-secondary'>Love Knot</h3>
                    <p className='text-sm text-zinc-600'>In reclaimed silver, gold and diamonds, hearts will be glowing.</p>
                    <button className='border-b-2 border-zinc-500 text-sm font-semibold text-zinc-500' >
                        <Link href={'/pages/men/Rings'} >
                            SHOP THE COLLECTION
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoveKnotSection






