import React from 'react'
import Trainers from '../../molecules/Trainers/trainers'
import Program from '../../molecules/Program/program'
import Footer from '../../molecules/Footer/footer'
import Navbar from '../../molecules/Navbar/navbar'
import Hero from '../../molecules/Hero/hero'
import Price from '../../molecules/Price/price'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Program/>
        <Trainers/>
        <Price/>
        <Footer/>
    </div>
  )
}

export default Home