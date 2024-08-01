import Heart from "./heart";
import Secondcomponent from "./secondsection";
import Thirthcomponent from "./thirthsection";
import Forthcomponent from "./forthsection";

function MyCard(accomodation){

    return(
        <div className='container'>
            {/* first component */}
            <div className='housePicture' style={{backgroundImage:`url(${require(accomodation.houseImage)})`}}>
              <Heart/>
            </div>

            <div className='details'> 
                {/*second Container*/}
                <Secondcomponent details = {accomodation}/>
                <hr/>

                {/*thirth Container*/}
                <Thirthcomponent details = {accomodation}/>
                <hr/>

                {/*forth Container*/}
                <Forthcomponent details = {accomodation}/>
                
            </div>  
            
        </div>
    )
}
export default MyCard