import React from 'react'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Portfolio } from './components/portfolio/Portfolio'
import { Testimonials } from './components/testimonials/Testimonials'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import ParticlesBg from './components/particles/ParticlesBg'

export const App = () => {
  return (
    <>
      {/* <ParticlesBg /> */}
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}