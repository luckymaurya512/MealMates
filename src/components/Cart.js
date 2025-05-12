import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info('Cart cleared!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 pt-12 md:p-12 lg:p-16 bg-white rounded shadow-md dark:bg-gray-800 mt-10">
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
        <ItemList items={cartItems} className="font-extralight" />
        {/* Total= {cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0)} */}
      </div>
      <div className="flex flex-col justify-end gap-3 mt-4">
        <h2 className="text-lg ml-2 font-bold">
          Total: ₹
          {cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0)}
        </h2>
        <button
        onClick={()=>{
          dispatch(clearCart());
          toast.success('Order placed successfully!', {
            position: "top-right",
            autoClose: 2000,
          });
          navigate("/order-confirmation");
        }} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4">
          Order Now
        </button>
      </div>
      {/* Add ToastContainer here if not already in App.js */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Cart;
