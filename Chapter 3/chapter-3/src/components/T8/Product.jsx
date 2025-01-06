import React from "react";
import { ShopData } from "./ShopData";
import ProductCard from "./ProductCard";
import './T8.css'

const Product = () => {
  return (
    <div className="product-container">
      
      {ShopData.map((product,index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Product;

// import { ShopData } from './ShopData'
// import {ProductCard} from './ProductCard'
// // import { CartContext } from './CartContext'
// // import { CartProvider } from './CartContext'
// import React from 'react'

// const Products = () => {
//     return (
//         <>
//             <h1>Welcome To Shopppp</h1>
//             {ShopData.map((Data, Index) => {
//                 <ProductCard key = { Index } {...Data}/>
//             })}
//         </>
//     )
// }

// export default Products
