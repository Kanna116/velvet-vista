import { useContext } from 'react';
import BagBtn from './bagbtn';
import ProductContext from '../context/productContext';

const AddToBagBtn = ({ id, inBag }) => {
    const { addToBag } = useContext(ProductContext)


    return (
        <>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    addToBag(id)
                }
                }
                // className='w-full h-full bg-[#646464] text-white uppercase font-semibold hover:bg-black duration-200 ease-in-out'>
                className='border-[1px] border-[#999999] hover:border-black rounded-full'>
                <BagBtn inBag={inBag} />
            </button>
        </>
    )
}

export default AddToBagBtn