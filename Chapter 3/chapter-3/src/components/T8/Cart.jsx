import React from "react";
import { useCart } from "./context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const fee = 48; // Define any fee you want to add
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalTotal = totalAmount + fee; // Total including fee

  const handleRemove = (item) => {
    dispatch({ type: "Remove_Item", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  const handleIncreaseQuantity = (item) => {
    dispatch({ type: "Increase_Quantity", payload: item });
  };

  const handleDecreaseQuantity = (item) => {
    dispatch({ type: "Decrease_Quantity", payload: item });
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} width="100" />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleDecreaseQuantity(item)} className="quantity-btn">-</button>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncreaseQuantity(item)} className="quantity-btn">+</button>
            <button className="remove" onClick={() => handleRemove(item)}>Remove</button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div>
          <h3>Total: ${totalAmount}</h3>
          <h3>Fee: ${fee}</h3>
          <h3>Final Total: ${finalTotal}</h3>
          <button onClick={handleClearCart} className="clear-cart">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
