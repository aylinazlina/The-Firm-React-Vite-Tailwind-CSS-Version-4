import React from 'react'
import Header from './component/Header'
import Banner from './component/Banner'

import Conatiner from './component/commoncomponent/Conatiner'
import OurBlog from './component/OurBlog'

const App = () => {
  
  return (
    <div className=''>
       
      <div className="container">
       <Header/>      
      </div>
      

      <Banner/>

      <div className="container">
        <OurBlog/>
      </div>
      
    </div>
  )
}

export default App
