import React from "react";
import { CartProvider } from "./context/CartContext";
import Product from "./Product";
import './T8.css'
import Cart from "./Cart";

const T8 = () => {
  document.title='Cart Website'

  return (
    <CartProvider>
      <h1>Shopping Website</h1>
      <div className="app">
        <Product />
        <div className="vl"></div>
        <Cart/>
      </div>
    </CartProvider>
  );
};

export default T8;




// import React from 'react'
// import { ShopData } from './ShopData'
// import{ProductCard} from './ProductCard'
// // import { CartContext } from './CartContext'
// // import { CartProvider } from './CartContext'

// const T8 = () => {
//     const ProductCard = ({ name, imageUrl, price }) => {
//         // const imageUrl = 


        
//     }
//     return (
//         <>
//             <div>
//                 <nav className='header'>
//                     <ul>
//                         <li><a href="/">Home</a></li>
//                         <li><a href="/">Cart</a></li>
//                     </ul>
//                 </nav>
//             </div>
//             <div>
//                 <h1>Products</h1>
//                 <p></p>

//             </div>
//         </>
//     )
// }

// export default T8
