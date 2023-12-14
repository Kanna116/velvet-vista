import Image from 'next/image';
import React from 'react'

const BigBox = (props) => {
  const { title, desc, image, width } = props;
  return (
    <div className={`w-1/2 h-full relative p-14 text-white flex items-start justify-end flex-col gap-5 bg-gradient-to-t from-[#000000aa] to-[transparent] w-${width}`}>
      <h2 className='text-xl font-secondary'>{title}</h2>
      <p className={`text-sm w-${width}`}>{desc}</p>
      <button className='border-white border-b-2 text-sm font-semibold uppercase '>
        Shop Now
      </button>

      <Image
        src={`/images/${image}`}
        fill={true}
        alt={title}
        className='w-full h-full absolute top-0 left-0 z-[-1]'
      />
    </div>
  )
}

export default BigBox