import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Make sure Heroicons is installed

const OrderConfirmation = () => {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded shadow-md dark:bg-gray-800 mt-16 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Your delicious food is on its way. Sit back and relax while we get it ready for you.
      </p>
      <Link
        to="/"
        className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
