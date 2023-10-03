import React, { useEffect, useState } from "react";
import { CDN_RES_INFO } from "../utils/constants";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch(CDN_RES_INFO + resId);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant info");
        }
        const json = await response.json();
        setRestaurantInfo(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching restaurant info:", error);
      }
    };
    getInfo();
  }, [resId]); // Include resId in the dependency array

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const restaurantData = restaurantInfo?.data || {};
  const itemCards =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  const restaurantDetails = restaurantData?.cards[0]?.card?.card?.info || {};
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    id,
    sla: { deliveryTime },
  } = restaurantDetails;

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h5>
        {costForTwoMessage} - {avgRating} - {deliveryTime}
      </h5>
      <ul className="res-menu">
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <br />
            {item?.card?.info?.name} - Rs.{(item?.card?.info?.price || item?.card?.info?.defaultPrice ||0) / 100}{" "}
            <br />
            {item?.card?.info?.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
