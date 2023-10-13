import { useState, useEffect } from "react";
import { CDN_RES_INFO } from "../utils/constants";


export const useRestaurant = (resID) =>{
    const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(CDN_RES_INFO + resID);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant info");
        }
        const json = await response.json();
        setRestaurantInfo(json);
      } catch (error) {
        console.error("Error fetching restaurant info:", error);
      }
    };
    getInfo();
  }, [resID]); // Include resId in the dependency array
  
  return restaurantInfo
}

