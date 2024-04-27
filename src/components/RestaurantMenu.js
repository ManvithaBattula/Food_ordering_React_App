import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const[restaurantInfo, setRestaurantInfo] = useState();
    const {resId} = useParams();
    console.log('inside ',resId)

    useEffect(() => {
        fetchRestaurantsInfo();
    },[])

    const fetchRestaurantsInfo = async() => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await response.json()
        setRestaurantInfo(json?.data)
    };

    return(
        <div>
            <h1>{restaurantInfo?.cards[0]?.card?.card?.text}</h1>
        </div>
    )
};

export default RestaurantMenu;
