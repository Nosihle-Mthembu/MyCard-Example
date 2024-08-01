function Forthcomponent(details){
    return(
        <>
            <div className="realtor">REALTOR</div>
            <div className='profile'>
                <div className="profilePicture"> </div> 
                <div >
                    <div className="realtorName">{details.details.accomodation.RealtorFullame}</div>   
                    <div className="realtorNumber">{details.details.accomodation.RealtorNumber}</div>   
                </div>
            </div>
        </>
       
    )
}
export default Forthcomponent