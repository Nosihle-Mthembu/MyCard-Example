import { LuHeart } from "react-icons/lu";
// import { GiHearts } from "react-icons/gi";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { useState } from "react";


function MyCard(){

    const [isLiked, setIsLiked] = useState(false);
    let iconColour = "red";

    function ChangeLike(){
      
        if(isLiked){
            console.log("liked")
            setIsLiked(false);
            iconColour = "red";
        }

        if(!isLiked){
            console.log("unliked")
            setIsLiked(true);
            iconColour = "white";
        }
    }

    return(
        <div className='container'>
            {/* first component */}
            <div className='housePicture'>
                <div className="hearticon"><LuHeart onClick={ChangeLike} style={{
                    width:30,
                    height:30,
                    color: iconColour,
                    float:"right",
                    margin:20,
                }}/>
                </div>
            </div>

            <div className='details'> {/*second Container*/}

                <div className="secondComponent">  {/*second component*/}
                    <div className='houseName'>
                        <div className='house'>DETACHED HOUSE</div>
                        <div className='years'><li>5Y OLD</li></div>
                    </div>
                    
                    <div className="CostPrice">$750,000</div>
                    <div className="address">742 Evergreen Terrace</div>
                </div>
                <hr/>

                {/*thirth Container*/}
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
                <hr/>

                     {/*forth Container*/}
                    <div className="realtor">REALTOR</div>
                    <div className='profile'>
                        <div className="profilePicture"> </div> 
                        <div >
                            <div className="realtorName">Tiffany Heffner</div>   
                            <div className="realtorNumber">(555) 555-4321</div>   
                        </div>
                       
                    </div>
            </div>  
        </div>
    )
}
export default MyCard