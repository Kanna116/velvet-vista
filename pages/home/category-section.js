import { useState } from 'react';
import categorydata from '../data/categorydata';
import CategoryCard from '../components/category';


const CategorySection = () => {

    const [gender, setGender] = useState('men');


    let displayCategories = categorydata.filter(item => item.gender === gender)

    let buttonBg = gender === 'men' ? true : false


    return (
        <div className="category-section min-h-[80vh] w-full lg:px-24 md:px-20 px-[24px] py-10 flex flex-col gap-10 items-center justify-evenly">
            <h1 className="font-bold text-zinc-700 text-2xl ">Shop by Category</h1>

            <div className={`button-container w-fit h-fit  border-[0.2px] border-zinc-400  flex items-center gap-1  relative before:content-[''] before:absolute  before:bg-black before:inset-[2px] ${buttonBg ? 'before:right-1/2' : 'before:left-1/2'}   before:z-[1]  before:duration-200`}>

                <button className="man px-8 py-3 text-xl transition-all duration-200 z-[3] w-32"
                    onClick={() => setGender('men')}
                    style={{ color: `${(buttonBg) ? 'white' : 'black'}` }}>
                    Men
                </button>

                <button
                    className="woman px-8 py-3 text-xl transition-all duration-200 z-[3] w-32"
                    onClick={() => setGender('women')}
                    style={{ color: `${(buttonBg) ? 'black' : 'white'}` }}>
                    Women
                </button>

            </div>
            <div className="category-container w-full h-fit  flex flex-wrap justify-between lg:justify-center md:justify-center gap-5">
                {displayCategories.map((category, index) => {
                    return <CategoryCard key={index} {...category} />
                })}
            </div>
        </div>
    )
}

export default CategorySection