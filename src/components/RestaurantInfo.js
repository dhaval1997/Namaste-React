import React from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../Hooks/useRestaurant";
import { CDN_RES_MENU_IMG } from "../utils/constants";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurant(resId);
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
    sla: { deliveryTime },
  } = restaurantDetails;

  return (
    <div className="res-info">
      <div className="res-info-name">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <h5>
          {costForTwoMessage} ----- {"⭐ " + avgRating} ----- {deliveryTime}
        </h5>
      </div>
      <div>
        <ul className="res-menu">
          {itemCards.map((item) => (
            <div className="res-menu-list" key={item.card.info.id}>
              <div className="res-menu-item-details">
                <span>
                  {item?.card?.info?.name} - Rs.
                  {(item?.card?.info?.price ||
                    item?.card?.info?.defaultPrice ||
                    0) / 100}
                </span>
                <p>{item?.card?.info?.description}</p>
              </div>
              <div className="res-menu-list-img">
                <img
                  className=""
                  src={CDN_RES_MENU_IMG + item.card.info.imageId}
                ></img>
                <button className="res-menu-item-btn">Add+</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
