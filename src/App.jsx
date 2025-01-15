

import { Brands,CTA, Navbar} from './components';
import {Blog,Features,Header, Footer, Possibility, WhatGPT3} from './containers'
import './App.css'

function App() {


  return (
    <>
    <div className="gradient__bg">
    <Navbar />
    <Header />
    </div>
    <Brands />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </>
  )
}

export default App
