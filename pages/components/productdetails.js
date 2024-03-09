import { useContext } from 'react'
import HeartBtn from './heartbtn'
import ProductContext from '../context/productContext'

const ProductDetails = ({ category, description, id, isFavourite, image, name, price, reviewCount, rating, inBag }) => {

    const { makeFav, addToBag } = useContext(ProductContext)



    return (
        <div className="product-details lg:w-2/5 md:w-2/5 w-full lg:h-screen md:h-screen h-fit lg:pl-20 md:pl-10 px-0 py-5 sticky top-[70px] text-[#999999]">
            <div className='w-full h-full py-5 flex flex-col gap-5'>
                <h1 className='font-secondary text-xl text-black'>{name}</h1>
                <p className='text-sm '>{description}</p>
                <h3 className='price text-black text-2xl font-medium flex items-center gap-4'>
                    ${price}
                    <span className='line-through font-normal text-xl opacity-50 ml-2'>${price + 300}</span>
                </h3>
                <h4 className=''>Metal: <span className='text-black ml-5'>Sterling Silver</span></h4>
                <div >Rating: <span className='text-black ml-5'>{rating}</span> <br /> No.of Reviews <span className='text-black ml-5'>{reviewCount}</span></div>

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
                    <button
                        onClick={() => addToBag(id, inBag)}
                        className='w-full h-full bg-[#646464] text-white uppercase font-semibold hover:bg-black duration-200 ease-in-out'>
                        Add To Bag
                    </button>
                    <button
                        onClick={() => makeFav(id)}
                        className='border-[1px] border-[#999999] hover:border-black rounded-full'>
                        <HeartBtn id={id} isFavourite={isFavourite} />
                    </button>
                </div>

                <hr className='my-5' />
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

