import { useState } from 'react';
import Category from './components/category';

const CategorySection = () => {
    const categories = [
        {
            title: 'Bracelets',
            image: 'category-6.webp',
        },
        {
            title: 'Rings',
            image: 'category-7.webp',
        },
        {
            title: 'Necklaces',
            image: 'category-8.webp',
        },
        {
            title: 'Earrings',
            image: 'category-9.webp',
        },
        {
            title: 'All',
            image: 'category-10.webp',
        },
        {
            title: 'Bracelets',
            image: 'category-1.webp',
        },
        {
            title: 'Rings',
            image: 'category-2.webp',
        },
        {
            title: 'Necklaces',
            image: 'category-3.webp',
        },
        {
            title: 'Earrings',
            image: 'category-4.webp',
        },
        {
            title: 'All',
            image: 'category-5.webp',
        },

    ]

    const [category, setCategory] = useState(true);

    const toggleCategory = () => {
        setCategory(prevCategory => !prevCategory)
    }

    let displayCategories = category ? categories.slice(0, 5) : categories.slice(5, 10)



    return (
        <div className="category-section h-[80vh] w-full px-32 py-10 flex flex-col items-center justify-evenly">
            <h1 className="font-bold text-zinc-700 text-2xl ">Shop by Category</h1>

            <div className={`button-container w-fit h-fit  border-[0.2px] border-zinc-400  flex items-center gap-1  relative before:content-[''] before:absolute  before:bg-black before:inset-[2px] ${category ? 'before:right-1/2' : 'before:left-1/2'}   before:z-[1]  before:duration-200`}>

                <button className="man px-8 py-3 text-xl transition-all duration-200 z-[3] w-32"
                    onClick={toggleCategory}
                    style={{ color: `${(category) ? 'white' : 'black'}` }}>
                    Men
                </button>

                <button
                    className="woman px-8 py-3 text-xl transition-all duration-200 z-[3] w-32"
                    onClick={toggleCategory}
                    style={{ color: `${(category) ? 'black' : 'white'}` }}>
                    Women
                </button>

            </div>
            <div className="category-container w-full h-1/2  flex gap-5">
                {displayCategories.map((category, index) => {
                    return <Category key={index} {...category} />
                })}
            </div>
        </div>
    )
}

export default CategorySection