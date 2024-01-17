import { createContext } from "react";


export async function getServerSideProps() {
    return {
      props: {},
    };
  }

const ProductContext = createContext()

export default ProductContext


