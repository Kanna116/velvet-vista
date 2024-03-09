import React from 'react'

const SortingBtn = ({ setSortingWay }) => {

    const handleChange = (e) => {
        const { value } = e.target
        setSortingWay(+value)
    }

    return (
        <>
            <div className='w-full h-14 lg:px-20 md:px-20 px-[24px] flex items-center justify-end mt-8'>
                <span>Sort By :</span>
                <select
                    name="sorting"
                    id="sorting"
                    className='px-3'
                    onChange={handleChange}>
                    <option value="7" >High selling</option>
                    <option value="1" >Price Low - High</option>
                    <option value="2" >Price High - Low</option>
                </select>

            </div>

        </>
    )
}

export default SortingBtn