import { useState } from "react";
import { LOGO_URL } from "../common/constants";
import { Link } from "react-router-dom";
export const HeaderComponent = () => {
    const [toggleButton, setToggleButton] = useState("Login");

    return(
        <div className="flex justify-between border-b-2 p-4">
            <img src={LOGO_URL} className="w-20 h-20"></img>
                <ul className='flex align-middle'>
                    <li className="px-4 pt-7" ><Link to="/">Home</Link></li>
                    <li className="px-4 pt-7"><Link to = "/about">About Us</Link></li>
                    <li className="px-4 pt-7"><Link to = "/contact">Contact</Link></li>
                    <button className= "mr-4" onClick={() => {
                        toggleButton === "Login"?
                        setToggleButton("LogOut"):
                        setToggleButton("Login")}}
                        >{toggleButton}</button>
                </ul>
        </div>
    )
};

export default HeaderComponent;