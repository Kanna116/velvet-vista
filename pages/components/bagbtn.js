import React from 'react'
import { IoBagHandle, IoBagHandleOutline } from 'react-icons/io5'

const BagBtn = ({ inBag }) => {
    return (
        <>
            <div className='flex relative h-full aspect-square p-3 items-center justify-center '>
                <span className=' flex items-center justify-center text-black '>
                    {inBag ? <IoBagHandle /> : <IoBagHandleOutline />}
                </span>
            </div >
        </>
    )
}

export default BagBtn