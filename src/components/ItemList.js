import { CDN_URL } from "../utils/constant";
import { LOGO_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    // console.log(items);
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2  border-gray-200 border-b-2 text-left flex">
                    <div className="flex-grow">
                        <div className="py-1">
                            <span>{item.card.info.name}</span>
                        </div>
                        <div className="py-1">
                            <span> ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <div className="py-1">
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div>
                        <div className="absolute">
                            <button className="p-1 ml-10 -mt-1.5 rounded-lg bg-black shadow-lg text-white">
                                Add+
                            </button>
                        </div>
                        <div className="image-container">
                            <img src={(CDN_URL + item.card.info.imageId) || LOGO_URL } className="w-28 h-24 rounded-lg object-cover m-2 border-r-2" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;
