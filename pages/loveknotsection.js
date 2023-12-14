import Image from 'next/image'
import React from 'react'

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
                    <div className="directbuy w-[20vw] h-32 absolute bottom-10 left-10 z-40 bg-white flex items-center opacity-0 transition-all duration-300">
                        <Image
                            src={'/images/loveknot/loveknot-3.webp'}
                            width={500}
                            height={500}
                            alt='love knot'
                            className='h-full w-2/5 object-cover '
                        />
                        <div className='px-5'>
                            <h3 className='font-secondary text-sm'>Love Knot Bracelet, Sterling Silver, 6.5MM</h3>
                            <p>$1295</p>
                        </div>

                    </div>
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
                    <div className="directbuy w-[20vw] h-32 absolute bottom-10 left-10 z-40 bg-white flex items-center opacity-0 transition-all duration-300">
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

                    </div>
                </div>
                <div className="text-container w-1/2 flex flex-col items-start justify-between gap-5 px-10 py-20 self-start">
                    <h3 className='text-xl font-secondary'>Love Knot</h3>
                    <p className='text-sm text-zinc-600'>In reclaimed silver, gold and diamonds, hearts will be glowing.</p>
                    <button className='border-b-2 border-zinc-500 text-sm font-semibold text-zinc-500' >SHOP THE COLLECTION</button>
                </div>
            </div>
        </div>
    )
}

export default LoveKnotSection






