import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { GoArrowUpRight } from "react-icons/go"
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ProductCard from './products/productcard'
import ProductContext from '../context/productContext'

const WishList = () => {

    const { allProducts } = useContext(ProductContext)

    const favItems = allProducts.filter(item => item.isFavourite === true)
    const allFavoriteItems = favItems.map(item => <ProductCard key={item.id} {...item} />)

    return (
        <>
            <>
                <Navbar />
                <div className='w-screen mt-[70px] relative mb-12'>
                    <div className='product-hero-section w-full h-[45vh] relative'>
                        <Image
                            src={'/images/category/banner/men/all.webp'}
                            fill={true}
                            alt='product section hero image'
                            className='h-full w-full object-cover'
                        />
                        <div className='w-full h-full absolute top-0 left-0  bg-gradient-to-b from-transparent to-[#00000099]'></div>

                        <h1 className='my-10 text-3xl  absolute z-10 bottom-10 left-20 font-semibold text-white tracking-wide'>Favourite Collection</h1>
                    </div>
                    <div className="product-container w-full min-h-[20vh] grid grid-cols-4 gap-10 px-20 mt-16 relative">
                        {
                            favItems.length !== 0 ?
                                allFavoriteItems :
                                <div className='w-full absolute h-full flex items-center justify-center flex-col'>
                                    <h1 className='font-bold text-xl'>Haven&apos;t made anything Favorite </h1>
                                    <br />
                                    <Link href={'/pages/all'} ><div className='text-base text-blue-400 flex items-center gap-4 underline font-semibold'>Lets go find what&apos;s ours <GoArrowUpRight /></div></Link>
                                </div>
                        }


                    </div>
                </div>
                <Footer />
            </>
        </>
    )
}

export default WishList