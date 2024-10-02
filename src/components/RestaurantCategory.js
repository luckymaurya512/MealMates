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
      <div className="w-full bg-gray-50 mx-auto flex justify-between my-4 shadow-lg p-3 cursor-pointer" onClick={handleClick}> 
        <span className="font-bold text-lg">{data?.title || "NOT FOUND"} ({data?.itemCards?.length})</span>
        <span>⬇️</span>
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