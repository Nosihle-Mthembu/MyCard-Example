import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCard from './components/mycardexample'
import './App.css'

function App() {

  let House = {
    houseImage: "https://static.wixstatic.com/media/7d0df7_cf31b23a2465418684b4fdbfa3c306db~mv2.jpg/v1/fill/w_690,h_378,al_c,lg_1,q_80/7d0df7_cf31b23a2465418684b4fdbfa3c306db~mv2.jpg",
    housetype: "Detached House",
    age: 5  + "yrs",
    price: "R" + 750000,
    Address: 742 + " Evergreen Terrace",
    bathrooms: 2 + " Bathroom",
    bedrooms: 3 + " Bedroom",
    RealtorFullame: "Tiffany Heffner",
    RealtorNumber: "(555) 555-4321",
  }

  // localStorage.setItem("address", House.Address )
  // console.log(localStorage.getItem("Address"))

  localStorage.setItem("House", JSON.stringify(House))
  console.log(localStorage.getItem("Address"))

    let HousesForSale = [
      {
        houseImage:("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/43/e5/14/hotel-krone.jpg?w=1200&h=-1&s=1"),
        housetype: "secluded House",
        age: 10 + "yrs",
        price: "R" + 2050000,
        Address: 8 + "Micaheal Court",
        bathrooms: 4 + " Bathroom",
        bedrooms: 5 + " Bedroom",
        RealtorFullame: "Gafild Jefferson",
        RealtorNumber: "(332) 211-9569",
      },
      {
        houseImage:("https://media-cdn.tripadvisor.com/media/photo-s/0c/fd/31/d0/killarney-lodge.jpg"),
        housetype: "Oudtshoorn Rural",
        age: 6 + "yrs",
        price: "R" + 735000,
        Address: 8 + " Oudtshoorn",
        bathrooms: 1 + " Bathroom",
        bedrooms: 2 + "Bedroom",
        RealtorFullame: "Christiano Flin",
        RealtorNumber: "(186) 866-4210",
      },
      {
        houseImage: ("https://lennon-estates.com/wp-content/uploads/2024/01/front-5-830x460.jpg"),
        housetype: "Town House",
        age: 2 + "yrs",
        price: "R" + 1500000,
        Address: 7 + "Scotville Court",
        bathrooms: 2 + " Bathroom",
        bedrooms: 3 + " Bedroom",
        RealtorFullame: "Zama Ngcobo",
        RealtorNumber: "(033) 367-4545",
      }
]




  return (
    <>
    <div style={{display:"flex"}}>
      <MyCard accomodation = {House}/>
      <MyCard accomodation = {HousesForSale[0]}/>
      <MyCard accomodation = {HousesForSale[1]}/>
      <MyCard accomodation = {HousesForSale[2]}/>
    </div>
      
    </>
  )
}

export default App
