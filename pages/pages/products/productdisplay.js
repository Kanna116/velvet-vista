import Modal from '@/pages/components/modal'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import ProductDetails from '../../components/productdetails'

const ProductDisplay = (product) => {

    const { image } = product

    const [isModelOpen, setIsModelOpen] = useState(false);


    useEffect(() => {
        if (isModelOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        };
    }, [isModelOpen]);


    const handleModal = () => {
        setIsModelOpen(!isModelOpen)
    }
    return (
        <div>
            <Navbar />
            {
                isModelOpen && <Modal image={image} modalClose={handleModal} />
            }
            <div className="display-product w-full  min-h-screen  mt-[70px] px-20 py-10 flex relative">
                <div className="image-container w-3/5   ">
                    <ul className='w-full h-fit flex flex-wrap gap-2 [&>li]:w-[49%] [&>li]:aspect-square [&>li]:flex-shrink-0 [&>li:first-child]:w-full [&>li]:bg-[#e3e3e333] [&>li]:overflow-hidden '>
                        <li
                            onClick={() => handleModal()}
                        >
                            <Image
                                src={`${image}`}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1 '
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image
                                src={`${image}`}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply  scale-150 rotate-45'
                            />
                        </li>
                        <li>
                            <Image
                                src={`${image}`}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply scale-[2]'
                            />
                        </li>
                        <li>
                            <Image
                                src={`${image}`}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply -rotate-45'
                            />
                        </li>
                        <li>
                            <Image
                                src={`${image}`}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply -rotate-90'
                            />
                        </li>
                        <li>
                            <Image
                                src={'/images/product/product-1/product-image-6.webp'}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                        <li>
                            <Image
                                src={'/images/product/product-1/product-image-7.webp'}
                                width={5000}
                                height={5000}
                                draggable='false'
                                alt='product 1 image 1'
                                className='product-image w-full h-full object-contain object-center mix-blend-multiply'
                            />
                        </li>
                    </ul>

                </div>
                <ProductDetails {...product} />
            </div>
            <Footer />


        </div>
    )
}

export default ProductDisplay