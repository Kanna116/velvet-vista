import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
const HeartBtn = () => {

    const [isLiked, setIsLiked] = useState(false);

    const toggleLiked = () => {
        setIsLiked(prevState => !prevState)
    }

    return (
        <div className='flex relative h-full aspect-square p-3 items-center justify-center '
            onClick={toggleLiked}>
            <span className=' flex items-center justify-center text-black '>
                {isLiked ? <IoHeartSharp /> : <IoHeartOutline />}
            </span>


        </div>
    )
}

export default HeartBtn