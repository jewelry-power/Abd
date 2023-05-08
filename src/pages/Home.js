import React from 'react'
import Carsoul from "./Carsoul"
import Product from "./ProductHome"
import Discount from "./Discount"
import Chat from './Chat'
function Home() {
  return (
    <div>
        <Carsoul/>
        <Product/>
        <Discount/>
        <Chat/>
    </div>
  )
}

export default Home