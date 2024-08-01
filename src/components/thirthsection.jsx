import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";

function Thirthcomponent(){

    return(
        <div className='rooms'>
            <div className="Bedroom"><LiaBedSolid style={{width:40,
                height:40,
                verticalAlign:"middle",
            }}/><span className="number">3</span> Bedrooms </div>
            <div className="Bathroom"><LiaBathSolid style={{width:40,
                height:40,
                verticalAlign:"middle",
            }}/><span className="number">2</span> Bathrooms </div>
        </div>
    )
}
export default Thirthcomponent