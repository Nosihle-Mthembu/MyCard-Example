function Secondcomponent({details}){
    console.log(details)
    return(
        <>
            <div className="secondComponent">  {/*second component*/}
                    <div className='houseName'>
                        <div className='house'>{details.accomodation}</div>
                        <div className='years'><li>5Y OLD</li></div>
                    </div>
                    
                    <div className="CostPrice">R750,000</div>
                    <div className="address">742 Evergreen Terrace</div>
                </div>
        </>
    )
}
export default Secondcomponent