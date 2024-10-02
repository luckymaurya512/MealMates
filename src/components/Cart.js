import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-2xl mx-auto p-8 pt-12 md:p-12 lg:p-16 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="flex justify-end mb-4">
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        )}
        {cartItems.length === 0 && (
          <h1 className="text-lg text-gray-500 italic">
            Your cart is empty, please add items to your cart
          </h1>
        )}
      </div>
      <div className="divide-y divide-gray-200">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;