import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const HeartBtn = ({ isFavourite }) => {

    return (
        <div className='flex relative h-full aspect-square p-3 items-center justify-center '>
            <span className=' flex items-center justify-center text-black '>
                {isFavourite ? <IoHeartSharp /> : <IoHeartOutline />}
            </span>
        </div >
    )
}

export default HeartBtn