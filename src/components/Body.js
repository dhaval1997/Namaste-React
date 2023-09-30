import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { CDN_DATA } from "../utils/constants";
import Shimmer from "./ShimmerUI";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
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
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setlistOfRestaurant(cdnListData);
      setFiltered(cdnListData);
    } catch {
      (err) => console.error(err);
    }
  };

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
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
