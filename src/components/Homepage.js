
import React from 'react'
import Header from './Header'
import Banner from './Banner'
import About from './About'

const HomePage=()=>{
  return(
      <main className="home-page">
      <Header/>
      <section className="container">
       <Banner/>
       <About/> 
      </section>
      </main>
  )
}

export default HomePage;