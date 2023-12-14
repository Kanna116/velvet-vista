import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-[130vh] relative'>
            <video
                src="/video/home-video.mp4"
                autoPlay loop muted
                className="w-full h-full absolute z-1 object-cover ">
            </video>

            <button className='absolute z-2 uppercase text-sm font-semibold bottom-10 left-1/2 -translate-x-1/2 text-white border-b-2 border-white'>
                Discover the Holiday Shop
            </button>
        </div>
    )
}

export default HeroSection