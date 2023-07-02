import React from 'react'
import Trainers from '../../molecules/Trainers/trainers'
import Program from '../../molecules/Program/program'
import Footer from '../../molecules/Footer/footer'

const Home = () => {
  return (
    <div>
        <Program/>
        <Trainers/>
        <Footer/>
    </div>
  )
}

export default Home