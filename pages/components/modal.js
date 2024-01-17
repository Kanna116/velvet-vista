import Image from "next/image";
import { TfiClose } from "react-icons/tfi";
const Modal = ({ image, modalClose }) => {

    return (
        <>
            <div className='w-full h-screen bg-[#ffffff]  select-none flex items-center justify-center fixed z-50 top-0'>

                <button
                    onClick={() => modalClose()}
                    className="absolute top-[10%] right-[10%]"
                >
                    <span className="text-2xl font-thin">
                    <TfiClose />
                    </span>
                </button>
                <div className='modal w-fit h-[90vh]'>
                    <Image
                        src={image}
                        width={5000}
                        height={5000}
                        draggable='false'
                        alt='product image'
                        className="w-full h-full object-contain"
                    />

                </div>

            </div>

            
        </>
    )
}

export default Modal