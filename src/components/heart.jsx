import { LuHeart } from "react-icons/lu";
// import { GiHearts } from "react-icons/gi";
import { useState } from "react";

function Heart(){
    // localStorage.setItem("myCat", "Tom");
    const [isLiked, setIsLiked] = useState(false);
    let iconColour = "red";
    let filler = "red"

    function ChangeLike(){
        setIsLiked(!isLiked)
       }
        if(isLiked){
            console.log("liked")
            // setIsLiked(false);
            iconColour = "red";
            filler = "red"
        }

        if(!isLiked){
            console.log("unliked")
            // setIsLiked(true);
            iconColour = "white";
            filler = "none"
        }
   

    return(
        <div className="hearticon"><LuHeart onClick={ChangeLike} style={{
            width:30,
            height:30,
            color: iconColour,
            fill: filler,
            float:"right",
            margin:20,
        }}/>
        </div>
    )
}
export default Heart