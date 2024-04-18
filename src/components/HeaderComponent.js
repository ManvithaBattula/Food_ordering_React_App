import { LOGO_URL } from "../common/constants";
export const HeaderComponent = () => {
    return(
        <div className="header-component">
            <img src={LOGO_URL} className="company-logo"></img>
                <ul className='hearder-list'>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign in</li>
                    <li>Cart</li>
                </ul>
        </div>
    )
};

export default HeaderComponent;