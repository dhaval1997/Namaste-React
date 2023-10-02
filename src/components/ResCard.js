import { CDN_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    avgRatingString,
    sla: { deliveryTime, lastMileTravelString },
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_IMG + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <h5>{costForTwo}</h5>
      <div className="rating">
        <h5>{"⭐ " + avgRating || avgRatingString}</h5>
        <h5>-</h5>
        <h5>{lastMileTravelString}</h5>
        <h5>-</h5>
        <h5>{deliveryTime + " Minutes"}</h5>
      </div>
    </div>
  );
};

export default ResCard;
