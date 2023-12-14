import Image from 'next/image'
import Navbar from '../components/navbar'
import ProductDetails from '../components/productdetails'
import Footer from '../footer'

const ProductDisplay = () => {
    return (
        <div>
            <Navbar />
            <div className="display-product w-full  min-h-screen  mt-[70px] px-20 py-10 flex relative">
                <div className="image-container w-3/5   ">
                    <ul className='w-full h-fit flex flex-wrap gap-2 [&>li]:w-[49%] [&>li]:aspect-square [&>li]:flex-shrink-0 [&>li:first-child]:w-full [&>li]:bg-[#e3e3e333] '>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-1.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1 '
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-2.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-3.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-4.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-5.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-6.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image 
                            src={'/images/product/product-1/product-image-7.webp'}
                            width={1000}
                            height={1000}
                            alt='product 1 image 1'
                            className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                    </ul>

                </div>
                <ProductDetails />
            </div>
            <Footer/>
        </div>
    )
}

export default ProductDisplay