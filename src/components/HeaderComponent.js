import { useState } from "react";
import { LOGO_URL } from "../common/constants";
import { Link } from "react-router-dom";
export const HeaderComponent = () => {
    const [toggleButton, setToggleButton] = useState("Login");

    return(
        <div className="header-component">
            <img src={LOGO_URL} className="company-logo"></img>
                <ul className='hearder-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <button onClick={() => {
                        toggleButton === "Login"?
                        setToggleButton("LogOut"):
                        setToggleButton("Login")}}
                        >{toggleButton}</button>
                </ul>
        </div>
    )
};

export default HeaderComponent;