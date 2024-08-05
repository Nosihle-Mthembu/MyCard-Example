import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCard from './components/mycardexample'
import TestingFunctions from './components/testingFunctions'
import './App.css'

function App() {

  let name = "Nana"
  let data = [500, 20, 30, 100, 50, 96]

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

  localStorage.setItem("name",JSON.stringify(name))
  localStorage.getItem("name")
  localStorage.setItem("data",JSON.stringify(data))
  localStorage.getItem("data")

  localStorage.setItem("House", JSON.stringify(House))
  localStorage.getItem("Address")

    let HousesForSale = [
      {
        houseImage:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/43/e5/14/hotel-krone.jpg?w=1200&h=-1&s=1",
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
        houseImage:"https://media-cdn.tripadvisor.com/media/photo-s/0c/fd/31/d0/killarney-lodge.jpg",
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
        houseImage: "https://lennon-estates.com/wp-content/uploads/2024/01/front-5-830x460.jpg",
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


let LastMinute = {
  houseImage: "https://lennon-estates.com/wp-content/uploads/2024/01/front-5-830x460.jpg",
  housetype: "House",
  age: 1 + "yrs",
  price: "R" + 60000,
  Address: 9 + "Scotville Court",
  bathrooms: 2 + " Bathroom",
  bedrooms: 3 + " Bedroom",
  RealtorFullame: "Gladies Ngcobo",
  RealtorNumber: "(033) 367-4549",
}

function create(LastMinute){

  localStorage.setItem("HousesForSale",JSON.stringify(HousesForSale))
  localStorage.getItem("HousesForSale")
}
create(HousesForSale.push(LastMinute))

let BookTable = [{
  Book1:{
  ISBN:1425789632587,
  Titles:"Outmeal,drums and school",
  NumOfPages:300,
  Edition:"thirth edition",
  Publisher:"Harvard Publishers",
  Editor:"Sandra Filler",
  Format:"Hard Cover",
  Price:"R"+150,
  CoverDesigner:"Bill Filler",
  ReleaseDate:"2008/01/06",
},
Book2:{
  ISBN:1425789683697,
  Titles:"The Phantom",
  NumOfPages:2000,
  Edition:"Not Found",
  Publisher:"London Publishers",
  Editor:"Lilly Hoff",
  Format:"Print out",
  Price:"R"+200,
  CoverDesigner:"Lilly Hoff",
  ReleaseDate:"Not found",
},
Book3:{
  ISBN:1425423895476,
  Titles:"How to make a slave",
  NumOfPages:16,
  Edition:"first Edition",
  Publisher:"Shutter and Shooter",
  Editor:"Deric House",
  Format:"Print out",
  Price:"R"+50,
  CoverDesigner:"Not Found",
  ReleaseDate:1999,}}]

  localStorage.setItem("BookTable",JSON.stringify(BookTable))

  let BookList = []

// console.log(BookTable)
  return (
    <>
    <div style={{display:"flex"}}>
      <MyCard accomodation = {House}/>
      <MyCard accomodation = {HousesForSale[0]}/>
      <MyCard accomodation = {HousesForSale[1]}/>
      <MyCard accomodation = {HousesForSale[2]}/>
      <MyCard accomodation = {LastMinute}/>
      <TestingFunctions/>
    </div>
      
    </>
  )
}

export default App
