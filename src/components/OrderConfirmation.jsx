import { Link } from "react-router-dom";
import { CheckCircleIcon, ClockIcon, TruckIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const OrderConfirmation = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  
  // Generate random order number and delivery time on component mount
  useEffect(() => {
    // Create a random order number
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`#${randomOrderNum}`);
    
    // Random delivery time between 25-45 minutes
    const deliveryMins = Math.floor(25 + Math.random() * 20);
    setEstimatedTime(`${deliveryMins} minutes`);
  }, []);
  
  return (
    <div className="max-w-2xl mx-auto p-8 md:p-10 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10 md:mt-16">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your delicious food is on its way. Sit back and relax while we get it ready for you.
        </p>
      </div>
      
      {/* Order Details */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">Order Number:</span>
          <span className="font-bold text-gray-800 dark:text-gray-200">{orderNumber}</span>
        </div>
        
        <div className="flex flex-col gap-4">
          {/* Estimated Time */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <ClockIcon className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery Time</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{estimatedTime}</p>
            </div>
          </div>
          
          {/* Delivery Status */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <TruckIcon className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Order Status</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Preparing your food</p>
            </div>
          </div>
          
          {/* Delivery Address */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <HomeIcon className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Delivery Address</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Home</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition text-center"
        >
          Back to Home
        </Link>
        <Link
          to="/my-orders"
          className="inline-block bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-6 border border-orange-500 rounded-md transition text-center"
        >
          Track My Order
        </Link>
      </div>
      
      {/* Thank you message */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for your order! We hope you enjoy your meal.
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;