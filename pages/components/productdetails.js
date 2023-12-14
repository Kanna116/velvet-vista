import React from 'react'
import HeartBtn from './heartbtn'

const ProductDetails = () => {
    return (
        <div className="product-details w-2/5 h-screen pl-20 py-5 sticky top-[70px] text-[#999999]">
            <div className='w-full h-full py-5 flex flex-col gap-5'>
                <h1 className='font-secondary text-xl text-black'>Love Knot Ring, Sterling Silver, 2.5MM</h1>
                <p className='text-sm '>Right over left, left over right. Separately woven chains are tied by hand into a binding knot, synonymous with commitment, resilience and love.6</p>
                <h3 className='price text-black'>$395</h3>
                <h4 className=''>Metal: <span className='text-black ml-5'>Sterling Silver</span></h4>
                <div className='size w-full h-fit'>
                    <h4 className='mb-5'>Size</h4>
                    <div className="size-container">
                        <ul className=' flex flex-wrap gap-y-5 gap-x-2 [&>li]:px-7 [&>li]:py-2 [&>li]:border-[2px] [&>li]:border-[#b9b9b9] [&>li]:text-black [&>li]:text-xs [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-300'>
                            <li className='hover:border-black'>5</li>
                            <li className='hover:border-black'>6</li>
                            <li className='hover:border-black'>7</li>
                            <li className='hover:border-black'>8</li>
                            <li className='hover:border-black'>9</li>
                            <li className='hover:border-black'>10</li>
                            <li className='hover:border-black'>11</li>
                            <li className='hover:border-black'>12</li>
                        </ul>
                    </div>

                </div>
                <div className="addtobag flex items-center justify-between gap-5">
                    <button className='w-full h-full bg-[#646464] text-white uppercase font-semibold hover:bg-black duration-200 ease-in-out'>Add To Bag</button>
                    <button className='border-[1px] border-[#999999] hover:border-black rounded-full'>
                        <HeartBtn />
                    </button>
                </div>

                <hr className='my-5'/>
                <div className="additional-details">
                    <ul className='[&>li]:flex [&>li>div:last-child]:last:text-black'>
                        <li>
                            <div className='w-32'>Style No.:</div>
                            <div>RB901039</div>
                        </li>
                        <li>
                            <div className='w-32'>Metal:</div>
                            <div>Sterling Silver</div>
                        </li>
                        <li>
                            <div className='w-32'>Band Width:</div>
                            <div>5MM x 11.5MM</div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default ProductDetails

