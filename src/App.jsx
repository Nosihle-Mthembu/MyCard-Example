import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCard from './components/mycardexample'
import './App.css'

function App() {

  let House = {
    houseImage: ("https://static.wixstatic.com/media/7d0df7_cf31b23a2465418684b4fdbfa3c306db~mv2.jpg/v1/fill/w_690,h_378,al_c,lg_1,q_80/7d0df7_cf31b23a2465418684b4fdbfa3c306db~mv2.jpg"),
    housetype: "Detached House",
    age: 5  + "yrs",
    price: 750000,
    Address: 742 + "Evergreen Terrace",
    bathrooms: 2 + "Bathroom",
    bedrooms: 3 + "Bedroom",
    RealtorFullame: "Tiffany Heffner",
    RealtorNumber: "(555) 555-4321",
  }

    // let HousesForSale = [
    //   house1 = {
    //     houseImage:("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/43/e5/14/hotel-krone.jpg?w=1200&h=-1&s=1"),
    //     housetype: "secluded House",
    //     age: 10 + "yrs",
    //     price: 2050000,
    //     Address: 8 + "Micaheal Court",
    //     bathrooms: 4 + "Bathroom",
    //     bedrooms: 5 + "Bedroom",
    //     RealtorFullame: "Gafild Jefferson",
    //     RealtorNumber: "(332) 211-9569",
    //   },
    //   house2 = {
    //     houseImage:("https://media-cdn.tripadvisor.com/media/photo-s/0c/fd/31/d0/killarney-lodge.jpg"),
    //     housetype: "Oudtshoorn Rural",
    //     price: 2735000,
    //     Address: 8 + "Oudtshoorn",
    //     bathrooms: 3 + "Bathroom",
    //     RealtorFullame: "Christiano Flin",
    //     RealtorNumber: "(186) 866-4210",
    //   },
    //   house3 = {
    //     houseImage: ("https://lennon-estates.com/wp-content/uploads/2024/01/front-5-830x460.jpg"),
    //     housetype: "Town House",
    //     age: 2 + "yrs",
    //     price: 1500000,
    //     Address: 8 + "Scotville Court",
    //     bathrooms: 2 + "Bathroom",
    //     bedrooms: 3 + "Bedroom",
    //     RealtorFullame: "Zama Ngcobo",
    //     RealtorNumber: "(033) 367-4545",
    //   }
    // ]




  return (
    <>
    <div style={{display:"flex"}}>
      <MyCard accomodation = {House.housetype}  houseage = {House.age} costprice = {House.price} costAddress = {House.Address} bath = {House.bathrooms} bed = {House.bedrooms} fullname = {House.RealtorFullame} num = {House.RealtorNumber}/>
      <MyCard accomodation2 = {HousesForSale}/>
      <MyCard/>
      <MyCard/>
    </div>
      
    </>
  )
}

export default App
