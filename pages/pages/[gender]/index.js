import Banner from '@/pages/components/banner'
import CategoryCard from '@/pages/components/category'
import Footer from '@/pages/components/footer'
import Navbar from '@/pages/components/navbar'
import { useRouter } from 'next/router'
import categories from '../../data/categorydata'


const Gender = () => {
    const router = useRouter();

    const { gender } = router.query;

    const displayCategories = categories.filter(item => item.gender === gender)

    return (
        <>
            <Navbar />
            
            <div className='h-[69px]'></div>
            <Banner gender={gender} category={gender} />

            <div className='px-20 h-fit min-h-[60vh] flex flex-col items-start justify-evenly'>
                <h1 className='text-xl'>Lets Find out what {gender === 'men' ? 'he' : 'she'} want</h1>

                <div className="category-container w-full h-fit flex gap-5">
                    {displayCategories.map((category, index) => {
                        return <CategoryCard key={index} {...category} />
                    })}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Gender