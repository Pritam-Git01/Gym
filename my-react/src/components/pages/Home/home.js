import React from 'react'
import Trainers from '../../molecules/Trainers/trainers'
import Program from '../../molecules/Program/program'
import Footer from '../../molecules/Footer/footer'
import Navbar from '../../molecules/Navbar/navbar'
import Hero from '../../molecules/Hero/hero'
import Price from '../../molecules/Price/price';
import { useRef } from 'react'
import ContactForm from '../../molecules/SignUp/signup'

const Home = () => {
    const programRef = useRef();
    const trainerRef = useRef();
    const homeRef =  useRef();
    const signRef = useRef();
    
  return (
    <div ref={homeRef}>
        <Navbar prRef={programRef} trRef={trainerRef} hmRef={homeRef} snRef={signRef}/>
        <Hero snRef={signRef}/>
        <div ref={programRef}><Program /></div>
        
        <div ref={trainerRef}><Trainers/></div>
        <Price/>
        <div ref={signRef}><ContactForm/></div>
        <Footer/>
    </div>
  )
}

export default Home;