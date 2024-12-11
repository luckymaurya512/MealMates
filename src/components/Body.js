import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.909596&lng=77.84101629999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        console.log(json);
        const resList =
          json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setListOfRestaurants(resList);
        setFilteredRestaurants(resList);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    if (listOfRestaurants) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.3
      );
      setFilteredRestaurants(filteredList);
    }
  };

  if (listOfRestaurants === null) {
    return <Shrimmer />;
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 mx-5 "
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => {
              const query=e.target.value;
              setSearchText(query);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(query.toLowerCase()) 
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
              {restaurant.info.promoted ?( <RestaurantCardPromoted resData={restaurant}/>):
              (<RestaurantCard resData={restaurant} />)}
            </Link>
          ))
        ) : (
          <div className="w-full text-center mt-4">No restaurants found</div>
        )}
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </div>
    </div>
  );
};

export default Body;
