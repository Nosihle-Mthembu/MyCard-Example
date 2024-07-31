function MyCard(){
    return(
        <div className='container'>
            {/* first component */}
            <div className='housePicture'>
            <div className='icon'></div>
            </div>

            <div className='details'> {/*second Container*/}

                <div className="secondComponent">  {/*second component*/}
                    <div className='houseName'>
                    <div className='house'></div>
                    <div className='years'></div>
                    </div>
                    
                    <div></div>
                    <div></div>
                </div>

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