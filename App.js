import React from 'react';
import ReactDOM from 'react-dom/client';
import BodyComponent from './src/components/BodyComponent';
import HeaderComponent from './src/components/HeaderComponent';


const AppContainer = () => {
    return(
        <div className='app-container'>
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />)