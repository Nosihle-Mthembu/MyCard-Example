import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";

function Thirthcomponent({details}){

    return(
        <div className='rooms'>
            <div className="Bedroom"><LiaBedSolid style={{width:40,
                height:40,
                verticalAlign:"middle",
            }}/><span className="number"></span>{details.accomodation.bedrooms}</div>
            <div className="Bathroom"><LiaBathSolid style={{width:40,
                height:40,
                verticalAlign:"middle",
            }}/><span className="number"></span> {details.accomodation.bathrooms} </div>
        </div>
    )
}
export default Thirthcomponent