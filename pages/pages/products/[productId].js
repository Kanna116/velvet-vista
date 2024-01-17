import { useRouter } from 'next/router'
import { useContext } from 'react'
import ProductDisplay from './productdisplay'
import ProductContext from '@/pages/context/productContext';

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;

    const { allProducts } = useContext(ProductContext);
    const product = allProducts.find(prod => prod.id === productId);

    if (!productId) {
        return <div className='w-screen min-h-screen flex items-center justify-center'>Loading...</div>;
    }

    if (!product) {
        return <div className='w-screen min-h-screen flex items-center justify-center'>Product not found</div>;
    }


    return (
        <>
            <ProductDisplay {...product} />
        </>
    )

}

export default ProductPage