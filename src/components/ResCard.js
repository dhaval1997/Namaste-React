import { RESCARD } from "../utils/constants";
import { CDN_IMG } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, rating, cuisines, deliveryTime, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RESCARD}></img>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{rating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default ResCard;
