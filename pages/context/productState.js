import { useState } from 'react';
import products from '../data/products';
import ProductContext from './productContext';

const ProductState = (props) => {

    const [allProducts, setAllProducts] = useState(products);


    const addToBag = (productId, inBag) => {

        setAllProducts((prevProducts) =>
            prevProducts.map((product) => {
                return (product.id === productId ?
                    {
                        ...product,
                        inBag: !product.inBag

                    } : product)
            })
        );
        alert(inBag ? 'Item has been removed from the bag' : 'Item has been added to Bag')

    }

    const makeFav = (productId) => {
        setAllProducts((prevProducts) =>
            prevProducts.map((product) => {
                return (product.id === productId ?
                    {
                        ...product,
                        isFavourite: !product.isFavourite
                    } : product
                )
            })
        );
    }



    return (
        <>
            <ProductContext.Provider value={{ allProducts, makeFav, addToBag }}>
                {props.children}
            </ProductContext.Provider>
        </>
    )

}

export default ProductState