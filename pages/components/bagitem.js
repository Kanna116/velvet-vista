import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import HeartBtn from './heartbtn';
import AddToBagBtn from './addtobagbtn';
import ProductContext from '../context/productContext';

const BagItem = ({ description, image, price, id, isFavourite, inBag }) => {

    const { makeFav } = useContext(ProductContext)
    
    return (
        <>
            <Link href={`/pages/products/${id}`} >
                <div className="product-in-bag h-1/2 px-2 py-5 flex items-center justify-center gap-5 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3 text-black">

                    <div className="image-container h-full w-1/3">
                        <Image
                            src={image}
                            width={500}
                            height={500}
                            alt='image'
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div className='h-full w-1/2 flex flex-col justify-center gap-2 relative'>
                        <h3 className='text-sm'>{description}</h3>
                        <h1>$ {price}</h1>
                        <div className='flex gap-5 items-center'>

                            <div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        makeFav(id)
                                    }}
                                    className='border-[1px] border-[#999999] hover:border-black rounded-full '>
                                    <HeartBtn id={id} isFavourite={isFavourite} />
                                </button>
                            </div>
                            <div>
                                <AddToBagBtn id={id} inBag={inBag} />
                            </div>
                        </div>
                    </div>

                </div>
            </Link>

        </>
    )
}

export default BagItem