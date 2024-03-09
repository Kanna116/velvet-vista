import Image from 'next/image'
import React from 'react'
import LoveknotCard from '../components/loveknotcard'
import Link from 'next/link'

const LoveKnotSection = () => {
    return (
        <div className='w-full lg:h-[140vh] h-fit flex lg:flex-row md:flex-row flex-col'>
            <div className="left lg:w-1/2 md:w-1/2 w-full h-full flex items-end ">
                <div className="image-container overflow-hidden lg:w-4/5 md:w-4/5 w-full lg:h-4/6 md:h-4/5 aspect-square relative lg:[&>.directbuy]:hover:opacity-100 md:[&>.directbuy]:hover:opacity-100">
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

            <div className="right lg:w-1/2 md:w-1/2 w-full h-full flex flex-col items-end justify-between">
                <div className="image-container overflow-hidden mt-10  lg:w-4/5 md:w-4/5 w-full lg:h-4/6 md:h-4/5 aspect-square relative [&>.directbuy]:hover:opacity-100">
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
                <div className="text-container lg:w-1/2 md:w-1/2 w-full flex flex-col items-start justify-between gap-5 px-10 py-20 self-start">
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






