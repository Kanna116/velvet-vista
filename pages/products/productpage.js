import Image from 'next/image'
import Navbar from '../components/navbar'
import Product from '../components/product'
import Footer from '../footer'

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <div className='w-screen mt-[70px]  relative mb-12'>
                <div className='product-hero-section w-full h-[45vh] relative'>
                    <Image
                        src={'/images/product/product-hero/product-rings.webp'}
                        fill={true}
                        alt='product section hero image'
                        className='h-full w-full object-cover '
                    />
                    <div className='w-full h-full absolute top-0 left-0  bg-gradient-to-b from-transparent to-[#00000099]'></div>

                    <h1 className='my-10 text-3xl  absolute z-10 bottom-10 left-20 font-semibold text-white tracking-wide'>Tags & Pendents</h1>

                </div>
                <div className="product-container w-full min-h-screen grid grid-cols-4 gap-10 px-20 mt-16">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage