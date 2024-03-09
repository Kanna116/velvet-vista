import Banner from '@/pages/components/banner';
import ProductContext from '@/pages/context/productContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import SortingBtn from '../../components/sortingbtn';
import ProductCard from '../products/productcard';

const Category = () => {
    const router = useRouter();
    // console.log(router)

    const { gender, category } = router.query;

    const [sortingWay, setSortingWay] = useState(7);
    const { allProducts } = useContext(ProductContext);


    const products = allProducts
        .filter(item => category !== 'all' ? item.category === category : item)

    switch (sortingWay) {
        case 1:
            products.sort((a, b) => a.price - b.price)
            break;
        case 2:
            products.sort((a, b) => b.price - a.price)
            break;
    }

    
    const displayProducts = products

    const allCategoryProducts =
        displayProducts.map(product => {
            return <ProductCard key={product.id} {...product} />
        })



    if (!gender && !category) {
        return <div className='w-full h-screen flex items-center justify-center'>Loading....</div>
    }

    return (
        <>
            <>
                <Navbar />
                <div className='w-screen mt-[69px] relative mb-12'>

                    <Banner gender={gender} category={category} />

                    <SortingBtn setSortingWay={setSortingWay} />

                    <div className="product-container w-full min-h-screen grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12  px-[24px] lg:px-[94px] md:px-[64px] place-items-center  mt-8 items-center">
                        {allCategoryProducts}
                    </div>
                </div>
                <Footer />
            </>
        </>
    )
}

export default Category