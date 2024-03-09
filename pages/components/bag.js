import Link from "next/link";
import { useContext, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import BagItem from "./bagitem";
import ProductContext from "../context/productContext";

const Bag = (props) => {

    const { allProducts } = useContext(ProductContext)
    const allBagItems = allProducts.filter(item => item.inBag === true)
    const moveBag = props.bag ? 'translate-x-0' : 'translate-x-full';
    useEffect(() => {
        if (props.bag) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';

        };
        
    }, [props.bag]);


    let subTotal = 0;
    allBagItems.map(item => subTotal += item.price)

    return (
        <div className={`lg:w-[450px] md:w-[450px] w-full h-full bg-white flex flex-col items-start justify-between fixed top-0 right-0   z-[55] ${moveBag}  duration-300 [&>*]:text-black`}>
            <div className="bag-details w-full flex items-center justify-between px-16 py-5">
                <h1 className='font-normal text-2xl '>Shopping Bag</h1>
                <span className='text-lg h-full flex items-center justify-center '
                    onClick={props.toggle}>
                    <TfiClose />
                </span>
            </div>

            <div className="bag-product w-full h-[100%] overflow-y-scroll border-y-[1px] border-[#00000090]  ">

                {
                    allBagItems.length !== 0 ?
                        allBagItems.map(item => <BagItem key={item.id} {...item} />) 
                        :
                        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                            <h1 className='font-bold text-xl '>Bag seems to be Empty </h1>
                            <Link href={'/pages/all'}>
                                <div className='text-base text-blue-400 flex items-center gap-4 underline font-semibold'>
                                    Lets go Bag something great <GoArrowUpRight />
                                </div>
                            </Link>
                        </div>
                }
            </div>

            <div className="subtotal  w-full h-[35%]  flex flex-col items-start justify-between px-8 py-5">

                <div className="flex items-center justify-between w-full text-2xl ">
                    <h1 className="font-light">SubTotal</h1>
                    <h2 className="font-normal">$ {subTotal}.00</h2>
                </div>

                <p className="text-[#888888] text-sm font-secondary">Shipping and Tax Calculated at checkout</p>

                <Link href={'/pages/checkout'}  className="w-full h-10">
                    <button className="w-full h-10 bg-black text-white uppercase font-medium tracking-wide">
                        Check Out Now
                    </button>
                </Link>

            </div>
        </div>


    )
}

export default Bag


