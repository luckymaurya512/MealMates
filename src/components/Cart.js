import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState("Home");
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info('Cart cleared!', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
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
      </div>
      <div className="flex flex-col justify-end gap-3 mt-4">
        {cartItems.length > 0 && (
          <h2 className="text-lg ml-2 font-bold">
            Total: ₹
            {cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0)}
          </h2>
        )}
        
        {/* Delivery Address Section */}
        {cartItems.length > 0 && (
          <div className="mt-6 mb-4">
            <h2 className="text-xl font-bold mb-3">Delivery Address</h2>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryAddress"
                  value="Home"
                  checked={selectedAddress === "Home"}
                  onChange={() => setSelectedAddress("Home")}
                  className="h-5 w-5 text-orange-500"
                />
                <span className="text-gray-800">Home</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryAddress"
                  value="Office"
                  checked={selectedAddress === "Office"}
                  onChange={() => setSelectedAddress("Office")}
                  className="h-5 w-5 text-orange-500"
                />
                <span className="text-gray-800">Office</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="deliveryAddress"
                  value="Other"
                  checked={selectedAddress === "Other"}
                  onChange={() => setSelectedAddress("Other")}
                  className="h-5 w-5 text-orange-500"
                />
                <span className="text-gray-800">Other</span>
              </label>
            </div>
          </div>
        )}

        {/* Payment Method Section */}
        {cartItems.length > 0 && (
          <div className="mt-6 mb-4">
            <h2 className="text-xl font-bold mb-3">Select Payment Method</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="flex flex-col gap-3">
                {/* Cash on Delivery - available */}
                <label className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => handlePaymentMethodChange("COD")}
                    className="h-5 w-5 text-orange-500"
                  />
                  <span className="text-gray-800">Cash on Delivery</span>
                </label>

                {/* UPI - unavailable */}
                <label className="flex items-center space-x-3 p-2 rounded text-gray-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    disabled
                    className="h-5 w-5 cursor-not-allowed"
                  />
                  <span>UPI Payment</span>
                  <span className="text-sm italic ml-2">(Currently unavailable)</span>
                </label>

                {/* Credit Card - unavailable */}
                <label className="flex items-center space-x-3 p-2 rounded text-gray-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="CreditCard"
                    disabled
                    className="h-5 w-5 cursor-not-allowed"
                  />
                  <span>Credit Card</span>
                  <span className="text-sm italic ml-2">(Currently unavailable)</span>
                </label>

                {/* Debit Card - unavailable */}
                <label className="flex items-center space-x-3 p-2 rounded text-gray-400">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="DebitCard"
                    disabled
                    className="h-5 w-5 cursor-not-allowed"
                  />
                  <span>Debit Card</span>
                  <span className="text-sm italic ml-2">(Currently unavailable)</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <button
            onClick={() => {
              if (!paymentMethod) {
                toast.warning('Please select a payment method!', {
                  position: "top-right",
                  autoClose: 2000,
                });
                return;
              }
              dispatch(clearCart());
              toast.success('Order placed successfully!', {
                position: "top-right",
                autoClose: 2000,
              });
              navigate("/order-confirmation");
            }}
            className={`${
              paymentMethod ? 'bg-orange-500 hover:bg-orange-700' : 'bg-gray-400 cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded ml-4 mt-2`}
          >
            Order Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;