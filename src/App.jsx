import React from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import OurBlog from './component/OurBlog'
import SlickSlider from './component/SlickSlider'
import Frustration from "./component/Frustration"
import Bussiness from "./component/Bussiness"
import Choose from "./component/Choose"
import Research from "./component/Research"
import Touch from "./component/Touch"
import Testimonial from './component/Testimonial'

const App = () => {

  return (
    <div className=''>


      <Header />
      <Banner />
      <OurBlog />
      <SlickSlider/>
      <Frustration/>
      <Bussiness/>
      <Choose/>
      <Research/>
      <Touch/>
      <Testimonial/>


    </div>
  )
}

export default App
