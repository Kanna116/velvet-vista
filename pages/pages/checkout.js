import React, { useContext } from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Footer from '../components/footer'
import Link from 'next/link'
import ProductCard from './products/productcard'
import { GoArrowUpRight } from 'react-icons/go'
import ProductContext from '../context/productContext'

const CheckOut = () => {

    const { allProducts } = useContext(ProductContext)

    const bagItems = allProducts.filter(item => item.inBag === true)
    const allBagItems = bagItems.map(item => <ProductCard key={item.id} {...item} />)

    let subtotal = 0;
    bagItems.map(item => subtotal += item.price)
    let GST = subtotal * 18 / 100
    let deviveryCharges = subtotal * 11 / 100

    return (
        <>
            <>
                <Navbar />
                <div className='w-screen mt-[69px] relative mb-12'>

                    <div className='product-hero-section w-full h-[45vh] relative'>
                        <Image
                            src={`/images/category/banner/women/all.webp`}
                            fill={true}
                            alt='product section hero image'
                            className='h-full w-full object-cover object-center'
                        />
                        <div className='w-full h-full absolute top-0 left-0  bg-gradient-to-b from-transparent to-[#00000099]'></div>

                        <h1 className='my-10 text-3xl w-3/4  absolute z-10 bottom-10 lg:left-20 md:left-16 left-1/2 -translate-x-1/2 lg:-translate-x-0 md:-translate-x-0 font-semibold text-white tracking-wide capitalize'>Bag It Buy It</h1>
                    </div>

                    {/* Bagged products */}
                    <div className="product-container relative w-full min-h-[30vh] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12  px-[24px] lg:px-[94px] md:px-[64px] place-items-center  mt-8 items-center">
                        {
                            bagItems.length !== 0 ?
                                allBagItems :
                                <div className='w-full absolute h-full flex items-center justify-center flex-col'>
                                    <h1 className='font-bold text-xl'>Not finding anything in the Bag </h1>
                                    <br />
                                    <Link href={'/pages/all'} ><div className='text-base text-blue-400 flex items-center gap-4 underline font-semibold'>Lets go Bag them <GoArrowUpRight /></div></Link>
                                </div>
                        }
                    </div>
                </div>

                {/* bill */}
                {
                    subtotal > 0 ?
                        <>
                            <hr />
                            <div className='my-20 px-32 [&>*]:flex [&>*]:items-center [&>*]:justify-between'>
                                <h1 className='mb-5 text-xl'>Subtotal :  <span className='w-32'>$ {subtotal}</span></h1>
                                <h3>GST :  <span className='w-32'>$ {GST}</span></h3>
                                <h3>Delivery Charges:  <span className='w-32'>$ {deviveryCharges}</span></h3>

                                <h1 className='mt-10 text-2xl'>
                                    Total Amout: <span className='w-32 border-t-[1px] border-t-black'>
                                        $ {(subtotal + GST + deviveryCharges).toFixed(2)}</span>
                                </h1>
                            </div>
                            <hr />

                        </>
                        :
                        //no item no bill 
                        <></>
                }
                <div className='w-full h-[20vh] flex flex-col items-center justify-evenly'>
                    <h1>Lets get your order on wheels</h1>
                    <button className='px-4 py-2 bg-zinc-950 text-white'>Make Payment here</button>
                </div>

                <Footer />
            </>
        </>
    )
}

export default CheckOut