import React, { createContext, useReducer, useContext } from 'react'
const CartContext = createContext()


const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_Item":
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
 
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += 1; // Increase quantity
        return updatedCart;
      } else {
        // If it's a new item, set quantity to 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

      
    case "Remove_Item":
      return state.filter((item) => item.id !== action.payload.id);

    case "Clear_Cart":
      return [];

    case "Increase_Quantity":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "Decrease_Quantity":
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};





export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)



// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "Add_Item":
//       return [...state, action.payload]

//     case "Remove_Item":
//       return state.filter((item) => item.name !== action.payload.name)

//     case "Clear_Cart":
//       return []

//     default:
//       return state;
//   }
// }

// import React, { createContext, useContext, useState } from 'react'
// // export const
// const CartItemContext = createContext()

// export const CartContext = ({children}) => {
//   const [CartItems,setCartItems] = useState([])
//   const AddToCart = (item)=>{
//     setCartItems((prevItems)=>[...prevItems,item])
//   }
//   const RemoveItem =(item)=>{
//     setCartItems((prevItems)=>prevItems.filter((item)=>item.id !==itemId))
//   }
//   const clearCart = ()=>{
//     setCartItems([])
//   }
//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
// export const  UseCart=() => useContext(CartContext)

// export default CartContext

