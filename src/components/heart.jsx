import { LuHeart } from "react-icons/lu";
// import { GiHearts } from "react-icons/gi";
import { useState } from "react";

function Heart(){
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
        <div className="hearticon"><LuHeart onClick={ChangeLike} style={{
            width:30,
            height:30,
            color: iconColour,
            float:"right",
            margin:20,
        }}/>
        </div>
    )
}
export default Heart