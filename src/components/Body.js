import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { CDN_DATA } from "../utils/constants";
import { useOnline } from "../Hooks/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  let isOnline = useOnline();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(CDN_DATA);
      const json = await data.json();

      const cdnListData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

          console.log(cdnListData);
      setlistOfRestaurant(cdnListData);
      setFiltered(cdnListData);
    } catch {
      console.error(err);
    }
  };

  if (!isOnline) {
    return <h1>Offline, Please check your Internet Connection</h1>;
  }

  const filteredHandler = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setFiltered(filteredList);
  };

  const searchRestaurants = () => {
    const searchedRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(searchedRestaurant);
  };

  const handleSearchInputChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const searchedRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchQuery)
    );
    setFiltered(searchedRestaurant);
    setSearchText(searchQuery);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-search">
        <button className="filter-btn" onClick={filteredHandler}>
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Search Restaurant here.."
          value={searchText}
          onChange={handleSearchInputChange}
        ></input>
        <button className="search-btn" onClick={searchRestaurants}>
          Search
        </button>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => (
          <Link
            style={{ textDecoration: "none" }}
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
