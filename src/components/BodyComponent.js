import { appjson } from "../common/data"
import { IMG_URL } from "../common/constants"

const BodyComponent = () => {
    return(
        <div className="px-40 border-b-2 pb-4">
            <h2 className="pt-4">What's on your mind?</h2>
            <div className='flex overflow-x-scroll'>
                {appjson.info.map(item => {
                    const string = IMG_URL+item.imageId
                    return <img src = {string} className="w-28"></img>
                })}

            </div>
        </div>
    )
}

export default BodyComponent;