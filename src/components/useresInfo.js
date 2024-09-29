import { useState,useEffect } from "react"
import { MENU_API } from "../utils/constant";
const useresInfo  = (resId)=>{
    const  [resInfo, setResInfo] = useState([]);
    useEffect(()=>{
     fetchdata();
    },[]);
    const fetchdata =async () => {
        try {
            const response = await fetch(`${MENU_API}/${resId}`);
            const data = await response.json();
            setResInfo(data);
          } catch (error) {
            console.error(error);
          }
    };
    return resInfo;

};
export default  useresInfo;
