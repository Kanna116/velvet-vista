import { IoClose } from "react-icons/io5";

const Bag = (props) => {

    const moveBag = props.bag ? 'translate-x-0': 'translate-x-full';
    return (
        <div className={`w-[450px] h-full bg-white flex flex-col items-start justify-between fixed top-0 right-0  bg-[#000000aa] z-[55] ${moveBag}  duration-300`}>
            <div className="bag-details w-full flex items-center justify-between px-16 py-5">
                <h1 className='font-medium text-2xl '>Shopping Bag</h1>
                <span className='text-3xl flex items-center justify-center'
                    onClick={props.toggle}>
                    <IoClose />
                </span>
            </div>

            <div className="bag-product w-full h-[100%] overflow-y-scroll border-y-[1px] border-[#00000090]  ">
                <div className="product-in-bag h-1/2 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3 ">
                </div>
                <div className="product-in-bag h-1/2 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3">
                </div>
                <div className="product-in-bag h-1/2 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3">
                </div>
                <div className="product-in-bag h-1/2 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3">
                </div>
                <div className="product-in-bag h-1/2 bg-white border-b-2 border-[#e3e3e3] mx-10 mb-3 ">
                </div>
            </div>

            <div className="subtotal  w-full h-[35%]  flex flex-col items-start justify-between px-8 py-5">
                <div className="flex items-center justify-between w-full text-2xl">
                    <h1 className="font-light">SubTotal</h1>
                    <h2 className="font-normal">$765</h2>
                </div>
                <p className="text-[#888888] text-sm font-secondary">Shipping and Tax Calculated at checkout</p>
                <button className="w-full h-10 bg-black text-white uppercase font-medium tracking-wide">Check Out Now</button>
            </div>
        </div>


    )
}

export default Bag


