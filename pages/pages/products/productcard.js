import AddToBagBtn from '@/pages/components/addtobagbtn'
import HeartBtn from '@/pages/components/heartbtn'
import ProductContext from '@/pages/context/productContext'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

const ProductCard = ({ description, id, name, price, image, isFavourite, inBag }) => {
    const { makeFav } = useContext(ProductContext)

    return (
        <>
            <>
                <Link href={`/pages/products/${id}`} >
                    <div className="product group  w-[300px]  h-fit min-h-[420px] bg-[#e3e3e333] flex-shrink-0 relative overflow-hidden hover:border-[0.1px] border-[#00000020]">
                        <div className="product-image w-full h-3/4 group">
                            <Image
                                src={`${image}`}
                                width={500}
                                height={500}
                                alt='product'
                                className='w-full h-full object-contain object-center mix-blend-multiply'
                            />
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt='product back'
                                className='back-image h-full w-full object-cover object-center absolute top-0 left-0 z-10 group-hover:scale-110  opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            />
                        </div>
                        <div className="product-details w-full h-1/4 px-6 py-5">
                            <h3 className='text-sm mb-3'>{description}</h3>
                            <h4 className='font-medium'>$ {price} <span className='line-through font-normal text-sm opacity-50 ml-2'> {price + 300}</span></h4>
                        </div>
                        <div className='absolute rounded-full bg-[#fff] z-20 bottom-[10%] left-1/3  -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0px_30px_0px_#00000030]'>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    makeFav(id)
                                }}
                                className='border-[1px] border-[#999999] hover:border-black rounded-full '>
                                <HeartBtn id={id} isFavourite={isFavourite} />
                            </button>
                        </div>
                        <div className='absolute rounded-full bg-[#fff] z-20 bottom-[10%] right-1/3  -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0px_30px_0px_#00000030]'>
                            <AddToBagBtn id={id} inBag={inBag} />
                        </div>



                    </div>
                </Link>

            </>
        </>
    )
}

export default ProductCard
