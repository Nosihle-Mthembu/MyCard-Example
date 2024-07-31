// import { LuHeart } from "react-icons/lu";
import { GiHearts } from "react-icons/gi";
import { useState } from "react";

function MyCard(){
    const [color, setColor] = useState();
    return(
        <div className='container'>
            {/* first component */}
            <div className='housePicture'>
                <div className="hearticon">{color}<GiHearts type="button"
            onClick={() => setColor("pink")} style={{
                    width:30,
                    height:30,
                    color:"whitesmoke",
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
                    <div>742 Evergreen Terrace</div>
                </div>
                <hr/>

                {/*thirth Container*/}
                <div className='rooms'>
                    <div><span></span> </div>
                    <div><span></span> </div>
                </div>

                     {/*forth Container*/}
                <div></div>
                <div className='profile'>
                    
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default MyCard