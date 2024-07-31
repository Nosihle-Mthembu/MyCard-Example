import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCard from './components/mycardexample'
import './App.css'

function App() {


  return (
    <>
      {/* <div className='container'>
        <div className='housePicture'>
          <div className='icon'></div>
        </div>

        <div>
          <div className='houseName'>
            <div>DETACHED HOUSE</div>
            <div><li>5Y OLD</li></div>
          </div>
          
          <div>$750,000</div>
          <div>742 Evergreen Terrace</div>
        </div>

        <div className='rooms'>
          <div><span>3</span> Bedrooms</div>
          <div><span>2</span> Bathrooms</div>
        </div>

        <div>REALTOR</div>
        <div className='profile'>
          icon
          <div>
            <div>Tiffany Heffner</div>
            <div>(555) 555-4321</div>
          </div>
        </div>
      </div> */}

      <MyCard/>
    </>
  )
}

export default App
