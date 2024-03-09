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
                            src={`/images/category/banner/men/all.webp`}
                            fill={true}
                            alt='product section hero image'
                            className='h-full w-full object-cover object-center'
                        />
                        <div className='w-full h-full absolute top-0 left-0  bg-gradient-to-b from-transparent to-[#00000099]'></div>

                        <h1 className='my-10 text-3xl w-3/4  absolute z-10 bottom-10 lg:left-20 md:left-16 left-1/2 -translate-x-1/2 lg:-translate-x-0 md:-translate-x-0 font-semibold text-white tracking-wide capitalize'>Favourite Collection</h1>
                    </div>

                    <div className="product-container relative w-full min-h-[30vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12  px-[24px] lg:px-[94px] md:px-[64px] place-items-center  mt-8 items-center">
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