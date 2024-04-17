import React from 'react';
import ReactDOM from 'react-dom/client';

const HeaderComponent = () => {
    return(
        <div className="header-component">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" className="company-logo"></img>
        </div>
    )
}

const AppContainer = () => {
    return(
        <div>
            <HeaderComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />)