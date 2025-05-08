import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="m-4 p-4 w-64 h-96 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex flex-col">
      <img
        className="w-full h-40 object-cover rounded-lg mb-2"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl mb-1 font-serif">{name}</h3>
      <h4 className="mb-1 text-gray-700 dark:text-gray-200">{cuisines.join(", ")}</h4>
      <h4 className="text-blue-500 font-semibold mb-1">{avgRating} stars</h4>
      <h4 className="text-orange-500">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-green-500 font-bold">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
