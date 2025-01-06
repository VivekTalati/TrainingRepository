import React from "react";
import { useCart } from "./context/CartContext";
import './T8.css'

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    console.log('Add to Cart clicked');
    dispatch({ type: "Add_Item", payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

// import React from 'react'
// import {useCart} from './CartContext'
// import './T8.css'

// const ProductCard = ({product}) => {
//     const {cart,dispatch} = useCart()
//     const isInCart = cart.find((item) => item.name === product.name);

//   return (
//     <>
//     <div className='product-card'>
//         <img src={product.imageUrl} alt="product.name" />
//         <h3>{product.name}</h3>
//         <p>{product.price}</p>
//         {isInCart ? (
//         <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}>
//           Remove from Cart
//         </button>
//       ) : (
//         <button onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}>
//           Add to Cart
//         </button>
//       )}
//     </div>
//     </>
//   )
// }

// export default ProductCard





// import React from 'react'
// import { ShopData } from './ShopData'
// // import { CartContext } from './CartContext'
// // import { CartProvider } from './CartContext'


// const ProductCard = () => {
//   const handleAddToCart = (ShopData) => {
//               AddToCart(ShopData)
//           }
//           return (
//               <>
//                   <div>
//                       <div className="userProfile">
//                           <div id='userDetails'>
//                               <div id='userImage'>
  
//                                   <img src='${imageUrl}'></img>
//                               </div>
//                               <h3>Name:</h3>
//                               <p><b>Price: </b></p>
//                               <button onClick={handleAddToCart}>Add To Cart</button>
//                           </div>
//                       </div>
  
//                   </div>
  
//               </>
//           )
// }

// export default ProductCard
