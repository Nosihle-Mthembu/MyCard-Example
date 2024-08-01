import Heart from "./heart";
import Secondcomponent from "./secondsection";
import Thirthcomponent from "./thirthsection";
import Forthcomponent from "./forthsection";

function MyCard(accomodation){
    // console.log(accomodation)
    return(
        <div className='container'>
            {/* first component */}
            <div className='housePicture'>
              <Heart/>
            </div>

            <div className='details'> 
                {/*second Container*/}
                <Secondcomponent details = {accomodation}/>
                <hr/>

                {/*thirth Container*/}
                <Thirthcomponent/>
                <hr/>

                {/*forth Container*/}
                <Forthcomponent />
        
                
            </div>  
            
        </div>
    )
}
export default MyCard