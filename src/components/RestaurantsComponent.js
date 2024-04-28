import react from "react";
import { useState, useEffect } from "react";
import { IMG_URL } from "../common/constants";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";

const RestaurantsComponent = () => {
    const [restaurantsList, setRestaurantsList] = useState([])
    const [filteredList, setFilteredList] = useState([]);
    const [searchRestaurants, setSearchRestaurants] = useState();
    const onlineStatus = useOnlineStatus();

    const fetchRestaurantsList = async () => {
        let restaurantsData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    
        let restaurantJson = await restaurantsData.json();
        setRestaurantsList(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    useEffect(() => {
        fetchRestaurantsList();
    },[])

    if(onlineStatus === false){
        return <h1>You are offline. Please check your internet.</h1>
    }

    if(restaurantsList?.length === 0 ){
        return <ShimmerComponent />
    }
    return (
        <div className="mx-40">
            <h2 className="py-4 ">Restaurants with online food delivery in Hyderabad</h2>
            <input type="text" className="border-2 mr-4"value={searchRestaurants} onChange={(e) => {
                setSearchRestaurants(e.target.value);
            }}></input>
            <button onClick={() => {
                const filteredRestaurantsList = restaurantsList.filter(item => item?.info?.name.toUpperCase().includes(searchRestaurants.toUpperCase()));
                setFilteredList(filteredRestaurantsList)
            }}>Search</button>
            <div  className="flex flex-wrap">
            {filteredList.map((item) => {
                const itemSource = IMG_URL + item?.info?.cloudinaryImageId
                return <Link to={"/restaurant/"+item?.info?.id}><div className="p-4 w-40">
                <img src={itemSource} className="w-40"></img>
                <h4 className="restaurant-header">{item?.info?.name}</h4>
                <div className="restaurant-container">
                    <h5 className="restaurant-header">{item?.info?.avgRating}</h5>
                </div>
                </div></Link>
            })}
            </div>  
        </div>
    )
};
export default RestaurantsComponent;