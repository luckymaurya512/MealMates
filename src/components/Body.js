import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useRef } from "react";
import Shrimmer from "./Shrimmer";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestaurantCard";

const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.909596&lng=77.84101629999999&restaurantId=";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loadingMenus, setLoadingMenus] = useState(false);
  const menuCache = useRef({});
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.909596&lng=77.84101629999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        const resList =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resList);
        setFilteredRestaurants(resList);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const fetchMenuItems = async (restaurantId) => {
    if (menuCache.current[restaurantId]) {
      return menuCache.current[restaurantId];
    }
    try {
      const response = await fetch(MENU_API + restaurantId);
      const data = await response.json();
      const menuCards =
        data?.data?.cards?.find(card => card.card?.card?.itemCards || card.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      let menuItems = [];
      menuCards.forEach(card => {
        const items = card.card?.card?.itemCards;
        if (items) {
          items.forEach(item => {
            if (item.card?.info?.name) {
              menuItems.push(item.card.info.name.toLowerCase());
            }
          });
        }
      });
      menuCache.current[restaurantId] = menuItems;
      return menuItems;
    } catch (err) {
      return [];
    }
  };

  const handleSearch = async (query) => {
    setSearchText(query);
    if (!query) {
      setFilteredRestaurants(listOfRestaurants);
      return;
    }
    setLoadingMenus(true);
    const lowerQuery = query.toLowerCase();
    const filtered = [];
    for (const restaurant of listOfRestaurants) {
      if (restaurant.info.name.toLowerCase().includes(lowerQuery)) {
        filtered.push(restaurant);
        continue;
      }
      const menuItems = await fetchMenuItems(restaurant.info.id);
      if (menuItems.some(itemName => itemName.includes(lowerQuery))) {
        filtered.push(restaurant);
      }
    }
    setFilteredRestaurants(filtered);
    setLoadingMenus(false);
  };

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
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto">
          <input
            type="text"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-72 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
            placeholder="Search for restaurants or menu..."
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => handleSearch(searchText)}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 w-full sm:w-auto"
          onClick={handleFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      {loadingMenus && (
        <div className="text-center text-blue-500 mb-4">Searching menus...</div>
      )}

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="w-full text-center text-gray-500 mt-4">
            No restaurants found
          </div>
        )}
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </div>
    </div>
  );
};

export default Body;
