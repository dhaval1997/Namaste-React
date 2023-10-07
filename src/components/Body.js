import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { CDN_DATA } from "../utils/constants";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { useOnline } from "../utils/useOnline";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(CDN_DATA);
      const json = await data.json();
      console.log(json);

      const cdnListData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setlistOfRestaurant(cdnListData);
      setFiltered(cdnListData);
    } catch {
      (err) => console.error(err);
    }
  };

  let isOnline = useOnline();
  if(!isOnline){
    return (
      <h1>Offline, Please check your Internet Connection</h1>
    )
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFiltered(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Search Restaurant here.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const searchedRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFiltered(searchedRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => (
          <Link style={{textDecoration:"none"}} key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><ResCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
