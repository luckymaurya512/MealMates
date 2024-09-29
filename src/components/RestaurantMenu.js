import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useresInfo from "./useresInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {


  const { resId } = useParams();
  const resinfo = useresInfo(resId);

  const [showIndex, setShowIndex] =useState(null);

  const menuItems = resinfo?.data;
  console.log(menuItems)

  const category = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((items) => {
    return items?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  });
  console.log(category)




  const { name = '', id = '', cloudinaryImageId = '', costForTwoMessage = '', cuisines = [] } = menuItems?.cards[2]?.card?.card?.info ?? {};
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <div>
        <h1 className="text-3xl font-bold font-serif text-blue-600 text-center ">{name}</h1>
        <h2 className="text-lg text-gray-600 font-serif text-center ">
          {cuisines.length ? cuisines.join(", ") : "Cuisines not available"}
        </h2>
        <h3 className="text-center text-gray-600">{costForTwoMessage}</h3>
        
      </div>
      <div className="m-4">
        {/* <h1 className="text-xl font-semibold font-serif mb-2">MENU</h1> */}
        {category?.map((items, index) => {
          return (
          <RestaurantCategory key={items.card.card.title} data={items?.card?.card}
          showItems={index===showIndex ? true: false}
          setShowIndex={() => setShowIndex(index)}
           />

          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
