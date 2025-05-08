import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false)
  // console.log(data);

  const handleClick= () => {
    setShowIndex(); 
    // setShowIndex();
  }
  return (
    <div>
      <div className="w-full bg-gray-50 dark:bg-gray-800 mx-auto flex justify-between my-4 shadow-lg p-3 cursor-pointer transition-colors" onClick={handleClick}> 
        <span className="font-bold text-lg text-gray-900 dark:text-gray-100">{data?.title || "NOT FOUND"} ({data?.itemCards?.length})</span>
        <span className="text-gray-900 dark:text-gray-100">⬇️</span>
      </div>

      {showItems && <ItemList items = {data.itemCards}/>}
      {/* <details>
        <summary className="w-full bg-gray-50 mx-auto flex justify-between my-4 shadow-lg">
          {data.title}
        </summary>
      {showItems && <ItemList items = {data.itemCards}/>}
      </details> */}
    </div>
  );
};

export default RestaurantCategory;