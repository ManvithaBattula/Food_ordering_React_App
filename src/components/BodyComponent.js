import { appjson } from "../common/data"
import { IMG_URL } from "../common/constants"

const BodyComponent = () => {
    return(
        <div className="body-container">
            <h2>What's on your mind?</h2>
            <div className='food-logo-container'>
                {appjson.info.map(item => {
                    const string = IMG_URL+item.imageId
                    return <img src = {string} className='items-logo'></img>
                })}

            </div>
        </div>
    )
}

export default BodyComponent;