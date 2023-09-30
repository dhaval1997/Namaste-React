import { CDN_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, deliveryTime, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_IMG+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default ResCard;
