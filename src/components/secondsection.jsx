function Secondcomponent(details){
    return(
        <>
            <div className="secondComponent">  {/*second component*/}
                    <div className='houseName'>
                        <div className='house'>{details.details.accomodation.housetype}</div>
                        <div className='years'><li>{details.details.accomodation.age}</li></div>
                    </div>
                    
                    <div className="CostPrice">{details.details.accomodation.price}</div>
                    <div className="address">{details.details.accomodation.price.Address}</div>
                </div>
        </>
    )
}
export default Secondcomponent