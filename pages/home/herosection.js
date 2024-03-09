import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full lg:h-[130vh] md:h-[100vh] h-[100svh] relative'>
            <video
                src="/video/home-video.mp4"
                autoPlay loop muted
                className="w-full h-full absolute z-1 object-cover ">
            </video>

            <button className='absolute z-2 uppercase lg:text-sm text-xs font-light bottom-10 left-1/2 -translate-x-1/2 text-white border-b-2 border-white'>
                <Link href={'/pages/men/all'} >
                Discover the Holiday Shop
                </Link>
            </button>
        </div>
    )
}

export default HeroSection